interface Project {
    projectName: string;
    company: string;
    period: string;
    descriptions: string[];
    image: string;
}
export const projects: Project[] = [
    {
        projectName: "WMS 개발 및 유지보수",
        company: "주식회사 로커스코리아",
        period: "2025.05 ~ 2025.06",
        image: "/parkjaehwan/image/projects/wms.png",
        descriptions: [
            "React.js, Next.js, React-Query, Zustand를 이용해서 개발을 진행했습니다.",
            "상품등록, 입고, 재고관리, 발주, 출고, 로케이션 관리 등 WMS로써 필요한 필수적인 기능 개발을 진행했습니다.",
            "현재 운영에 필요한 기능들 위주로 간소화 하여 우선 개발 진행하여 실제 현장에서 테스트했습니다.",
            "유지보수를 진행하며 현장에서 요청하는 추가적인 기능을 개발진행했습니다."
        ]
    },
    {
        projectName: "Indition 기획 및 개발",
        company: "주식회사 로커스코리아아",
        period: "2025.03 ~ 2025.04",
        image: "/parkjaehwan/image/projects/indition.png",
        descriptions: [
          "자체개발한 WMS와 연계될 수 있는 솔루션 프로그램 입니다.",
          "React.js, Next.js, React-Query, Zustand를 이용해서 개발을 진행했습니다.",
          "최종적으로 WMS+OMS+CRM+TMS+ERP의 통합솔루션을 목표로 기반을 다졌습니다.",
          "화주사와 물류사 양쪽에서 필요한 니즈를 고려하며 기획 및 개발했습니다.",
          "점진적으로 기능확장을 해나가기 위해 우선 소형화주사들을 메인 타겟으로 잡아 기획 및 개발했습니다.",
          "물류현장에서 화주사와 물류사가 원할하게 소통할 수 있게 채팅 기능을 구현했습니다.",
          "화주사에서 물류 진행상황을 빠르게 파악할 수 있도록 로케이션의 물류상황을 실시간으로 확인할 수 있는 화면을 구현했습니다.",
          "필요한 경우 화주사에서 직접 발주를 할 수 있는 기능을 추가했습니다.",
        ]
    },
    {
        projectName: "Crossmall 구축",
        company: "주식회사 리플럭스",
        period: "2024.10 ~ 2025.02",
        image: "/parkjaehwan/image/projects/crossmall.png",
        descriptions: [
            "전자정부프레임워크를 이용한 커머스솔루션 Spring-boot 프로젝트 입니다.",
            "쇼핑몰 홈페이지, 쇼핑몰 관리자, 입점업체 관리자 페이지의 Front-end 개발을 진행했습니다.",
            "다양한 케이스의 고객에게 빠르게 적용할 수 있게 개발을 진행했습니다."
        ]
    },
    {
        projectName: "AIDT",
        company: "주식회사 리플럭스",
        period: "2024.09 - 2024.10",
        image: "/parkjaehwan/image/projects/aidt.png",
        descriptions: [
          "교과서연구재단에서 진행하는 AI 디지털교과서 사업 홈페이지 및 관리자 페이지 개발에 참여했습니다.",
          "JSP를 이용한 사용자 화면 개발을 진행했습니다."
        ]
    },
    {
        projectName: "법무법인 율촌 유지보수",
        company: "주식회사 리플럭스",
        period: "2024.03 - 2025.02",
        image: "/parkjaehwan/image/projects/lawfirm.png",
        descriptions: [
          "법무법인 율촌의 홈페이지와 관리자 페이지의 유지보수 업무 PL을 맡아 진행했습니다.",
          "Java Spring으로 개발된 홈페이지 및 관리자페이지 수정사항 및 기능개선 요청을 맡아 진행했습니다.",
          "고객사의 요청 혹은 발견되는 오류에 대해 수정 작업을 진행했습니다.",
          "SEO 개선작업을 진행했습니다.",
          "meta태그 적용, AJAX로 채워지는 컨텐츠들을 JSTL로 변경하였습니다.",
          "Sitemap.xml 작성 ,구글 웹마스터, 네이버 서치매니저 등을 활용했습니다.",
          "구글,네이버 검색 시 노출되지 않던 상세페이지들을 검색 시 1~2페이지 내로 노출 되도록 개선했습니다."
        ]
    },
    {
        projectName: "한국건설기술관리협회 유지보수",
        company: "주식회사 리플럭스",
        period: "2024.02 - 2024.04",
        image: "/parkjaehwan/image/projects/construction.png",
        descriptions: [
          "ASP.NET으로 구축된 한국건설기술관리협회의 사용자페이지 및 관리자페이지 유지보수에 참여했습니다.",
          "Front-end 작업 소요에 대해서 aspx 및 c# 수정을 진행했습니다."
        ]
    },
    {
        projectName: "Peace-one 구축",
        company: "주식회사 리플럭스",
        period: "2023.12 - 2024.02",
        image: "/parkjaehwan/image/projects/peaceone.png",
        descriptions: [
          "Flutter를 이용한 부동산 조각투자 앱 1차 구축 사업에 참여했습니다.",
          "실시간 차트, 캐러셀뷰 등을 구현했습니다."
        ]
    },
    {
        projectName: "ECOYA earth",
        company: "주식회사 261하우스",
        period: "2023.05 - 2023.06",
        image: "/parkjaehwan/image/projects/ecoya.png",
        descriptions: [
          "React-native를 이용해 주식회사 HRM의 B2C 서비스 ECOYA earth앱을 개발했습니다.",
          "state 관리를 위해 redux, redux-saga를 사용했습니다.",
          "카카오, 네이버, 애플을 통한 간편 로그인을 구현했습니다.",
          "다음 주소 검색 API를 활용해 간편하게 주소를 등록할 수 있도록 했습니다."
        ]
    },
    {
        projectName: "FAAV Application",
        company: "주식회사 261하우스",
        period: "2023.01 - 2023.04",
        image: "/parkjaehwan/image/projects/faav-app.png",
        descriptions: [
          "React-native를 이용해 FAAV 웹을 IOS 및 Android App으로 개발했습니다.",
          "상태값을 여러 스크린에서 활용하기 위해 redux, redux-saga를 사용했습니다.",
          "일부 페이지에 관리 상 편의를 위하여 Webview를 사용하고 Bridge function을 통해 웹에서와 유사한 경험을 제공했습니다.",
          "Push notification 및 Dynamic Link를 위해 Firebase console을 활용했습니다.",
          "Bootpay module을 통해 사용자 결제를 구현했습니다.",
          "단순 WebView export가 아니라 실제 App으로 구현했습니다. 그렇기에 앱만이 전달할 수 있는 경험을 전달하는 것에 집중했습니다.",
          "오프라인의 경험과 온라인의 경험을 연결하는데 주력했습니다.",
          "오프라인 팝업 스토어에서 바코드를 찍고 카드로 결제하는 대신 QR코드를 찍고 다이나믹링크로 결제화면으로 연결시켰습니다.",
          "캐셔인력을 절약하고 앱 설치를 유도할 수 있었습니다."
        ]
    },
    {
        projectName: "Steppay StepShop",
        company: "주식회사 261하우스",
        period: "2021.09 - 2021.10",
        image: "/parkjaehwan/image/projects/steppay.png",
        descriptions: [
          "React와 Next.js 프레임워크를 사용해서 Steppay사의 솔루션 판매 페이지를 구현했습니다.",
          "고객사 요청이 있어서 state 관리는 Recoil을 사용했습니다."
        ]
    },
    {
        projectName: "FAAV & FAAV Connect Web",
        company: "주식회사 261하우스",
        period: "2021.03 - 2023.06",
        image: "/parkjaehwan/image/projects/faav-web.png",
        descriptions: [
          "React와 Next.js 프레임워크를 사용하여 편집샵 홈페이지를 구현했습니다.",
          "state관리를 위해 redux, redux-saga를 사용했습니다.",
          "Client - Server REST API 통신을 위해 axios를 사용했습니다.",
          "AWS CloudFront 배포를 위해 serverless를 사용했습니다.",
          "Steppay module을 통해 사용자 결제를 구현했습니다.",
          "기존 솔루션에서 자체개발 커머스 사이트로 옮기며 유저들의 반응에 빠른 피드백이 가능해졌습니다.",
          "직접 만든 제품이기에 다양한 전략을 적용해볼 수 있었습니다."
        ]
    },
    {
        projectName: "FAAV Cafe24 Project",
        company: "주식회사 261하우스",
        period: "2020.12 - 2021.04",
        image: "/parkjaehwan/image/projects/faav-cafe24.png",
        descriptions: [
          "React를 사용한 프로젝트 이전 Cafe24 솔루션을 통해 운영 중인 사이트를 유지보수 했습니다.",
          "HTML5, CSS, javascript를 통해 Cafe24에서 제공하지 않는 기능을 작성하고 자사의 서버와 API 통신하여 해결했습니다.",
          "단순판매가 아닌 렌탈을 진행하기 위해서 택배 반송로직에 필요한 기능을 심었습니다."
        ]
    }
]