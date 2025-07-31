"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { experience } from "./_arrays/experience";
import { projects } from "./_arrays/projects";
import Link from "next/link";
import imageLoader from "./util/imageLoader";
import { useEffect, useState } from "react";

const basePath = "/parkjaehwan";

export default function Home() {
  const [isFixed, setIsFixed] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    setIsFixed(window.scrollY > 366);
    if(window.scrollY > 278 && window.scrollY < 916) {
      setCurrentMenu(1);
    } else if(window.scrollY > 916 && window.scrollY < 2200) {
      setCurrentMenu(2);
    } else if(window.scrollY > 2200 && window.scrollY < 3188) {
      setCurrentMenu(3);
    } else if(window.scrollY > 3188 && window.scrollY < 5964) {
      setCurrentMenu(4);
    } else if(window.scrollY > 5964) {
      setCurrentMenu(5);
    } else {
      setCurrentMenu(0);
    }
  };
  useEffect(() => {

  }, [currentMenu]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const skills = [
    {
      type: "Front-End",
      list: [
        {
          name: "React",
          image: `${basePath}/image/skills/frontend/react.png`,
        },
        {
          name: "Next.js",
          image: `${basePath}/image/skills/frontend/nextjs.png`,
        },
        {
          name: "TypeScript",
          image: `${basePath}/image/skills/frontend/typescript.png`,
        },
        {
          name: "JavaScript",
          image: `${basePath}/image/skills/frontend/javascript.png`,
        },
        {
          name: "HTML5",
          image: `${basePath}/image/skills/frontend/html.png`,
        },
        {
          name: "CSS3",
          image: `${basePath}/image/skills/frontend/css.png`,
        },
        {
          name: "React-native",
          image: `${basePath}/image/skills/frontend/react-native.png`,
        },
        {
          name: "Flutter",
          image: `${basePath}/image/skills/frontend/flutter.png`,
        }
      ]
    },
    {
      type: "상태관리",
      list: [
        {
          name: "Redux",
          image: `${basePath}/image/skills/state/redux.png`,
        },
        {
          name: "redux-saga",
          image: `${basePath}/image/skills/state/redux-saga.png`,
        },
        {
          name: "Recoil",
          image: `${basePath}/image/skills/state/recoil.png`,
        },
        {
          name: "Zustand",
          image: `${basePath}/image/skills/state/Zustand.jpg`,
        },
        {
          name: "React-query",
          image: `${basePath}/image/skills/state/react-query.png`,
        },
      ]
    },
    {
      type: "Libraries",
      list: [
        //Axios, WebView, Firebase, Bootpay, Serverless, Dynamic Link 
        {
          name: "Axios",
          image: "/parkjaehwan/image/skills/libraries/axios.png",
        },
        {
          name: "WebView",
          image: "/parkjaehwan/image/skills/libraries/webview.png",
        },
        {
          name: "Firebase",
          image: "/parkjaehwan/image/skills/libraries/firebase.png",
        },
        {
          name: "Dynamic Link",
          image: "/parkjaehwan/image/skills/libraries/dynamic_link.png",
        },
      ]
    },
    {
      type: "Cooperation",
      list: [
        {
          name: "Git",
          image: "/parkjaehwan/image/skills/cooperation/git.png",
        },
        {
          name: "Github",
          image: "/parkjaehwan/image/skills/cooperation/github.png",
        },
        {
          name: "Notion",
          image: "/parkjaehwan/image/skills/cooperation/notion.png",
        },
        {
          name: "Slack",
          image: "/parkjaehwan/image/skills/cooperation/slack.png",
        },
        {
          name: "Figma",
          image: "/parkjaehwan/image/skills/cooperation/figma.png",
        },
        {
          name: "SVN",
          image: "/parkjaehwan/image/skills/cooperation/svn.png",
        },
        {
          name: "Adobe XD",
          image: "/parkjaehwan/image/skills/cooperation/adobexd.png",
        },
        
      ]
    }
  ]
  return (
    <div className={styles.page}>
      <div className={`${styles.page_menu_container} ${styles.fixed}`}>
        <div className={`${styles.page_menu_item} ${currentMenu == 1 ? styles.active : ""}`}>
          <Link href="#about-me">
            <p>About Me</p>
          </Link>
        </div>
        <div className={`${styles.page_menu_item} ${currentMenu == 2 ? styles.active : ""}`}>
          <Link href="#skills">
            <p>Skills</p>
          </Link>
        </div>
        <div className={`${styles.page_menu_item} ${currentMenu == 3 ? styles.active : ""}`}>
          <Link href="#experience">
            <p>Experience</p>
          </Link>
        </div>
        <div className={`${styles.page_menu_item} ${currentMenu == 4 ? styles.active : ""}`}>
          <Link href="#projects">
            <p>Projects</p>
          </Link>
        </div>
        <div className={`${styles.page_menu_item} ${currentMenu == 5 ? styles.active : ""}`}>
          <Link href="#contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
      <div className={styles.page_header}>
        <h1>박재환</h1>
        <h2>Front-End Developer</h2>
        <h4>1997. 02. 09</h4>
      </div>
      {/* about me */}
      <div className={`${styles.page_content} ${styles.page_content_about}`} id="about-me">
        <h2>About Me</h2>
        <div>
          <p>안녕하세요. <strong>비효율을 개선하고 더 나은 경험을 만드는 것을 즐기는 프론트엔드 개발자</strong> 박재환입니다.</p>
          <p>스타트업 환경에서 다양한 실무 경험을 쌓으며, <strong>서비스 확장성과 유지보수성을 고려한 구조적인 코드 작성</strong>에 집중해왔습니다.</p>
          <p><strong>직관적인 로직 구성</strong>과 <strong>명확한 흐름 설계</strong>를 통해 누구나 쉽게 이해하고 함께 협업할 수 있는 코드를 지향합니다.</p>
          <p><strong>문제 상황에서는 단순 수정이 아닌, 근본적인 원인을 분석하고 재발 방지책을 마련하는 것에 주력</strong>합니다. 이는 서비스 안정성과 팀 생산성에 직접적인 영향을 준다고 믿습니다.</p>
          <p>또한 항상 사용자의 관점에서 서비스를 바라보며, <strong>실제 사용 중 발생할 수 있는 불편함을 미리 예측하고 개선</strong>하는 데 노력을 아끼지 않습니다.</p>
          <p>UX는 단순한 시각 요소가 아닌, <strong>기획 의도를 효과적으로 전달하는 핵심 수단</strong>이라 생각하며, <strong>더 나은 사용자 경험을 위한 흐름과 상호작용</strong>을 고민하고 구현합니다.</p>
        </div>
        <div className={styles.about_me_reason}>
          <h3>Front-End를 선택한 이유</h3>
          <p>제가 만든 제품이 사용자에게 직접적인 경험으로 전달되는 것에 큰 매력을 느꼈습니다. 웹이나 앱에서 느꼈던 불편함을 개선하고 싶은 마음이 프론트엔드 개발자로 이끌었습니다.</p>
          <p><strong>작은 개선이 유저 경험을 바꾸고, 실제 피드백으로 돌아온다</strong>는 점이 가장 즐겁습니다.</p>
        </div>
        <div className={styles.about_me_reason}>
          <h3>개발자로서 가지는 목표</h3>
          <p>저는 아직 세상에 없지만 누군가에게 꼭 필요한 소프트웨어를 만들고 싶습니다.</p>
          <p>더 많은 사람들이 시간을 절약하고, 일상에서 몰랐던 편리함을 경험할 수 있도록 돕고 싶습니다.</p>
          <p><strong>기술을 통해 세상을 조금 더 효율적이고 편리하게 만드는 것</strong>, 그것이 제가 개발자로서 지향하는 방향입니다.</p>
        </div>
      </div>
      
      {/* skills */}
      <div className={`${styles.page_content} ${styles.page_content_skills}`} id="skills">
        <h2>Skills</h2>
        <div className={styles.skills_list}>
          {
            skills.map((skill, index) => (
              <div className={styles.skills_list_item} key={index}>
                <h3>{skill.type}</h3>
                <div className={styles.skills_list_item_image} key={index}>
                {
                  skill.list.map((item, index2) => (
                      <div className={styles.skills_list_item_image_container} key={`skill_list_${index2}`}>
                        <Image key={`skill_list_img_${index2}`} loader={imageLoader} src={item.image} alt={item.name} width={skill.type == "Cooperation" || (skill.type == "Libraries" && item.name != "Dynamic Link") || item.name == "redux-saga" ? 170 : item.name == "Zustand" ? 170 : item.name == "React-query" ? 170 : 100} height={100} objectFit="cover" />
                        <p key={`skill_list_img_text_${index2}`}>{item.name}</p>
                      </div>
                  ))
                }
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* Experience */}
      <div className={`${styles.page_content} ${styles.page_content_experience} `} id="experience">
        <h2>Experience</h2>
        <div className={styles.experience_list}>
          <div className={styles.experience_list_container}>
            {
              experience.map((experience, index) => (
                <div className={styles.experience_list_card} key={`experience_list_${index}`}>
                  <div className={styles.experience_list_card_header}>
                    <h3>{experience.company}</h3>
                    <p><strong>{experience.position}</strong> {experience.period}</p>
                  </div>
                  <div className={styles.experience_list_card_content}>
                    {
                      experience.experienceProject.map((project, index2) => (
                        <p key={`experience_list_card_content_${index2}`}> - {project.projectName}</p>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className={`${styles.page_content} ${styles.page_content_projects}`} id="projects">
        <h2>Projects</h2>
        <div className={styles.projects_list}>
          {
            projects.map((project, index) => (
              <div className={styles.projects_list_item} key={`projects_list_${index}`}>
                <h3>{project.projectName}</h3>
                <p>{project.period}</p>
                {project.descriptions.map((description, index) => (
                  <p key={index}>{description}</p>
                ))}
              </div>
            ))
          }
        </div>
      </div>

      {/* Contact */}
      <div className={`${styles.page_content} ${styles.page_content_contact}`} id="contact">
        <h2>Contact</h2>
        <div className={styles.contact_list}>
          <div className={styles.contact_list_item}>
            <h3>Phone</h3>
            <p>010-7284-8946</p>
          </div>
          <div className={styles.contact_list_item}>
            <h3>Email</h3>
            <p>lanatia03@gmail.com</p>
          </div>
          <div className={styles.contact_list_item}>
            <h3>Github</h3>
            <p>https://github.com/pjh0209</p>
          </div>
        </div>
      </div>
    </div>
  );
}
