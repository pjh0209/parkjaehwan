const { execSync } = require('child_process');
const { spawn } = require('child_process');

// IP 주소를 가져오는 함수
function getLocalIP() {
  try {
    // Windows에서 IP 주소 가져오기
    const result = execSync('ipconfig', { encoding: 'utf8' });
    const lines = result.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.includes('IPv4') && line.includes('192.168.')) {
        const match = line.match(/(\d+\.\d+\.\d+\.\d+)/);
        if (match) {
          return match[1];
        }
      }
    }
    
    // 192.168로 시작하는 IP가 없으면 첫 번째 IPv4 주소 사용
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.includes('IPv4')) {
        const match = line.match(/(\d+\.\d+\.\d+\.\d+)/);
        if (match) {
          return match[1];
        }
      }
    }
    
    return 'localhost';
  } catch (error) {
    console.log('IP 주소를 가져오는데 실패했습니다. localhost를 사용합니다.');
    return 'localhost';
  }
}

// 개발 서버 실행 함수
function startDevServer() {
  const localIP = getLocalIP();
  
  console.log('🚀 Next.js 개발 서버를 시작합니다...');
  console.log(`📍 로컬 주소: http://localhost:3000`);
  console.log(`🌐 네트워크 주소: http://${localIP}:3000`);
  console.log('📱 다른 기기에서 접속하려면 네트워크 주소를 사용하세요.');
  console.log('⏹️  서버를 중지하려면 Ctrl+C를 누르세요.\n');
  
  // Next.js 개발 서버 실행
  const child = spawn('npx', ['next', 'dev', '--turbopack'], {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      HOSTNAME: '0.0.0.0' // 모든 네트워크 인터페이스에서 접근 허용
    }
  });
  
  child.on('error', (error) => {
    console.error('❌ 서버 실행 중 오류가 발생했습니다:', error);
  });
  
  child.on('close', (code) => {
    console.log(`\n👋 서버가 종료되었습니다. (종료 코드: ${code})`);
  });
  
  // Ctrl+C 처리
  process.on('SIGINT', () => {
    console.log('\n🛑 서버를 종료합니다...');
    child.kill('SIGINT');
  });
}

// 스크립트 실행
startDevServer(); 