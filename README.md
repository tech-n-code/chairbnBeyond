# System Design Capstone (SDC) Project

## Table of Contents <span id="contents"></span>
* [Requirements](#requirements)
* [Chosen Optimization Path](#path)
* [Results](#results)
  - [Methodology](#methodology)
  - [Test Results](#testResults)
  - [Recommendation](#recommendation)
* [Technologies](#technologies)

## Requirements <span id="requirements"></span> ([Back to Top](#contents))

- Gather metrics about the current performance of the application
- Research and experiment with methods of optimizing and scaling the application
- Take detailed notes on all your work and findings in the engineering journal
- Report the results on a written and video format

## Chosen Optimization Path <span id="path"></span> ([Back to Top](#contents))

API Optimization through the use of a load balancer (Nginx).

Final testing architecture:

![Final Testing Diagram](API-optimization/SDC_final_testing_diagram.png)

## Results <span id="results"></span> ([Back to Top](#contents))

### I set out to answer the following questions for the client:

1. What are the API endpoints’ performance under the current configuration?
1. What are some ways key metrics such as latency, throughput, and availability, can
be improved?

### Methodology: <span id="methodology"></span> ([Back to Top](#contents))

The methodology for the tests was relatively simple; gather baseline metrics on Server 1 and Server 2 independent from each other, then deploy the Nginx load balancer and test again, analyze the results, and provide recommendations.

### Test Results: <span id="testResults"></span> ([Back to Top](#contents))

Both Server 1 and Server 1 results were relatively close to each other. Server 1 averaged 633.9 http requests per second (RPS) while Server 2 averaged 643.2 RPS. Latency under 500ms per http request was also close on both servers, able to achieve this in average for 700-800 VUs. In summary, they were able to easily handle the estimated normal load of 300 VUs with latency under 200ms per http request, but struggled with more than 800 VUs, maxing their throughput around 650 RPS.

![Server 1 Latency Test](API-optimization/Server-1_latency_test.png)

![Server 1 Latency Test](API-optimization/Server-2_latency_test.png)

The last phase of testing against the Nginx load balancer revealed promising results considering horizontal scaling was limited to the addition of only one server. Load balancing increased the average throughput of the system to 1,062 RPS from 650 RPS utilizing one server (63% improvement), and increased the maximum amount of VUs from 700-800 to 1300-1400 (86% improvement) while maintaining average latency of http requests under 500ms, all without compromising availability as error rate remained zero across the board.

![Nginx Latency Test](API-optimization/Nginx_latency_test.png)

#### Recommendation <span id="recommendation"></span> ([Back to Top](#contents))

Based on the results above, I encouraged the client to consider scaling horizontally to at least one more server. The ‘new normal’ with one load balancer between two low-power servers increased to 700 VUs (133% improvement), with a throughput of 1050 RPS (63% improvement), at the same baseline latency of 200ms and zero req. errors.

Read the full report here...

![Engineering Journal and Developer’s Notes](API-optimization/SDC_dev_journal_Will-Franceschini.pdf)

Watch the capstone video here...

[![Project Video](API-optimization/SDC_video_thumbnail.png)](https://youtu.be/AbH6sg5cFWI)

## Technologies <span id="technologies"></span> ([Back to Top](#contents))

[![Nginx](https://img.shields.io/badge/-Nginx-009639?style=flat&logo=nginx&logoColor=black)](https://nginx.org/)
[![K6](https://img.shields.io/badge/-k6-7D64FF?style=flat&logo=nginx&logoColor=white)](https://k6.io/)

# ----- Original README file of the project to optimize -----

## Front End Capstone Project: AirBnB Clone (ChairBnB)

### Tech Stack

[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/) [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

[![Git](https://img.shields.io/badge/Git-E44C30?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![VS Code](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)

[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
![Slack](https://camo.githubusercontent.com/870d2945e15dde83583f64ea1f3f4471702e45bf30fa884412da74cb7731ae42/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536c61636b2d3441313534423f7374796c653d666f722d7468652d6261646765266c6f676f3d736c61636b266c6f676f436f6c6f723d7768697465)
![Zoom](https://camo.githubusercontent.com/c6c90c4d74d5fad08da3e2c31c556ea8a8b45a6bd5756b6e49111d9825cde56f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5a6f6f6d2d3244384346463f7374796c653d666f722d7468652d6261646765266c6f676f3d7a6f6f6d266c6f676f436f6c6f723d7768697465)

### Objectives & Minimum Requirements

- Build a Full Stack UI Clone of an app's "item detail page"
- Page must contain multiple distinct modules of functionality
- Selected App should have sufficient complexity
- Implement React Components
- Perform API requests

### Table of Contents

- ChairBnB Wireframe: [Chairbnb Wireframe on Excalidraw](https://excalidraw.com/#room=e159a4a7216e9c77cc9c,YvhSpCdhIfyighAJuDY2IA)
- Completed project here : [Coming Soon]

### Installation & Setup

- Fork/Clone down this repo: [ChairBnB](https://github.com/CombatCoders/chairbnb.git)
- cd into the project folder

```bash
npm install
cd server/
npm install
cd ..
cd client
npm install
cd ..
docker-compose up -d
```

- create a .env file in the server directory and add a key to point to the running docker container DATABASE=postgres://postgres:docker@localhost:5432/chairbnb

- create a .env file in the client folder and add a key for the Google Maps Api. VITE_API_KEY="your api key"

```Bash
npm start
```

- Connect to the site in your browser 'http://localhost:5173/1'
- **Note:** You must have the /1 to see the product page. You can also use 2-4 to see different pages.

### _Collaborators_

- Matthew Drevon - [@MDrevon](https://github.com/MDrevon)
- Joe Goralczyk - [@joegor85](https://github.com/joegor85)
- Joshua Benton - [@josh-benton](https://github.com/josh-benton)
- Caleb Beam - [@calebbeam](https://github.com/calebbeam)
- Blake Barkman - [@BlakesHere](https://github.com/BlakesHere)
