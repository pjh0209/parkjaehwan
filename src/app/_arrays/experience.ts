interface ExperienceProject {
    projectName: string;
}
interface Experience {
    company: string;
    position: string;
    period: string;
    experienceProject: ExperienceProject[];
}

export const experience: Experience[] = [
    {
        company: "주식회사 로커스코리아",
        position: "프론트엔드 개발자",
        period: "2025.03 - 2025.06",
        experienceProject: [
            {
                projectName: "WMS",
            },
            {
                projectName: "Indition 기획 및 개발",
            },
        ],
    },
    {
        company: "주식회사 리플럭스",
        position: "프론트엔드 개발자",
        period: "2024.12 - 2025.03",
        experienceProject: [
            {
                projectName: "한국건설기술관리협회 유지보수",
            },
            {
                projectName: "법무법인 율촌 유지보수 및 기능개선",
            },
            {
                projectName: "교과서연구재단 유지보수",
            },
            {
                projectName: "AIDT 개발 참여",
            },
            {
                projectName: "중외제약 약국몰 고도화 개발",
            },
            {
                projectName: "Peace-one 앱 구축",
            },
            {
                projectName: "Crossmall 쇼핑몰 솔루션 구축",
            },
        ],
    },
    {
        company: "주식회사 261하우스",
        position: "프론트엔드 개발자",
        period: "2020.12 - 2021.08",
        experienceProject: [
            { projectName: "브랜드 편집샵 FAAV 웹 페이지 프론트엔드 유지보수" },
            { projectName: "FAAV 관리를 위한 관리자 웹 페이지 프론트엔드 개발" },
            { projectName: "FAAV 입점 브랜드를 위한 관리자 웹 페이지 FAAV Connect 프론트엔드 개발" },
            { projectName: "브랜드 편집샵 FAAV App 프론트엔드 개발" },
            { projectName: "주식회사 HRM Ecoya earth App 프론트엔드 개발" },
        ],
    },
    {
        company: "주식회사 261하우스",
        position: "프론트엔드 개발자 인턴",
        period: "2020.12 - 2021.08",
        experienceProject: [
            { projectName: "CAFE 24의 솔루션을 기반으로 개발된 기존 웹 커머스 사이트 유지보수" },
        ],
    }
]