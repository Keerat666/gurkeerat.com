---
title: Autopilot
publishDate: 2023-07-01 00:00:00
img: /assets/projects/autopilot.jpg
img_alt: A screenshot of the homepage of Autopilot
description: I have timed myself and you can create your first repo on AutoPilot in less than 3 minutes with a repo that has out of the box TiDB support along with a custom model having all the CRUD API's ready.
tags:
  - Node.js
  - OpenAI
  - React
  - TiDb
---

Initially I spent a good amount of time to figure out the intuitive flow of the application. I also showed some potential UI flows to our developer friends and then got their opinion and feedback on what kind of a flow would they like.

In the end, we finalised the UI flow to be exactly like how I create a backend project in real life. That made the user journey more fluid and interactive. I also decided the keep the UI simple and intuitive with minimal confusing stuff.

To summarise, it has 3 steps.

Just like I set up a new project in real life, I start with creating a project. In the backend a repo is made in a common organisation in which the base NodeJS repo is set up along with the connectivity to TiDB. Next, you can create a model. By model, I mean that you can group a bunch of attributes together and AutoPilot would create the CRUD API's for that model automatically and push the code in that same repo. These models are then converted to a TiDb table. By just calling the createTable API, a table is automatically created in TiDB allowing the user to save that data in the table. And to top it all off for cases where CRUD APIs are just not enough, you can use a prompt and send it to your AI which would generate the whole controller file on its own. 

If needed, you can manually intervene and even make the code better and then eventually add it to the project that it was destined for!

The AI Controller feature is similar to the AI SQL writing capability that TiDB provides.

The second page is the one called History which a person see's after logging in. That page basically functions like an audit/change log which keeps track of the things that the user has been doing on AutoPilot since signing up. 

I have a lot planned for AutoPilot in the future. We made sure to architect it in a way that the whole code base is flexible which would easily allow us to keep on adding more features.

I am highly positive about the great things that I can do for AutoPilot and make life easier for all the developers by automating the manual stuff!!

Some of my goals for the future are as follows :

- AI Test cases creation
- To enable users to generate a controller based on a specific model using AI
- Multiple Language support like SpringBoot + TiDB integration
- Multiple Database support + Database Migration services
- Analysing and identifying the most used Models and Controllers and serving them as pre made templates (This is where the OLAP aspect of TiDB would be again helpful)
- Detailed Analytics of users and projects (Another potential OLAP use case)
- Swagger/Postman like interface to test APIs from AutoPilot itself

#### Links related to Smart Hire Pro : 

  <ul>
    <li><a target="_blank" rel="noreferrer noopener" href="https://docs.google.com/presentation/d/17Duu78chyswit73Hju97wfsQxKAjK9Alq7SVbd2Tli4/edit?usp=sharing">Presentation</a>
    </li>
    <li><a target="_blank" rel="noreferrer noopener" href="https://youtu.be/FCfk4D_BKtQ">Youtube Demo</a>
    </li>
  </ul>

  <p>Code is available on request. </p>