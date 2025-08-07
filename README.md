# 개발자 박재환의 포트폴리오입니다.

## 주요 사용 라이브러리
- React.js
- Next.js
- TypeScript
- React Native
- Flutter
- styled-components
- Sass (SCSS)
- Redux Toolkit
- React Query
- Axios
- Framer Motion
- ESLint / Prettier
를 다룰 수 있습니다.

## 개발 서버 실행

### 일반 실행
```bash
npm run dev
```

### IP 자동 감지 실행 (네트워크 접근용)
IP가 자주 변경되는 환경에서 다른 기기에서 접근할 수 있도록 자동으로 현재 IP를 감지하여 서버를 실행합니다.

#### 방법 1: npm 스크립트 사용
```bash
npm run dev:network
```

#### 방법 2: 배치 파일 사용 (Windows)
```bash
dev-network.bat
```

#### 방법 3: PowerShell 스크립트 사용
```powershell
.\dev-network.ps1
```

### 실행 후 접속 주소
- **로컬 접속**: `http://localhost:3000`
- **네트워크 접속**: `http://[자동감지된IP]:3000`

> 💡 **팁**: 모바일 기기나 다른 컴퓨터에서 접속하려면 네트워크 주소를 사용하세요.
