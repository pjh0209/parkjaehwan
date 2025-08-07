# IP 자동 감지 개발 서버 실행 스크립트
Write-Host "🚀 IP 자동 감지 개발 서버를 시작합니다..." -ForegroundColor Green
Write-Host ""

# Node.js 스크립트 실행
try {
    node scripts/dev.js
}
catch {
    Write-Host "❌ 오류가 발생했습니다: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Node.js가 설치되어 있는지 확인해주세요." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "아무 키나 누르면 종료됩니다..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 