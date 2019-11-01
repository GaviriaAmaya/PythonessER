<h1 align="center">PythonessER</h1>
<p align="center">
  A tool to find your ER service on time.
</p>

<p align="center">
  <img src="./public/logo192.png"
       alt="PythonessER"
  />
</p>


## What is PythonessER?

PythonessER is a progressive web application that allows people to get information about ER health services in their country. At first, the development of this project is focused on Colombian country. The app grants access to:\

Get the urgency service closer to the user and according to the entity of healthcare (EPS)
Requirements to receive the service
According to the user location, give a route of how to get there

PythonessER looks for reduce the posibility of death in an emergency while the people try to find their health entity through a simple application that provides a list of the attention centers (Hospitals, clinics...) in the map of the application, from the closest to the user.

## Features

- PWA user interface
- Optional geolocation for the user's actual position
- Input for the user's address

## How it works?

As PWA, PythonessER is available online through the ***main page***, just left to give access to the link and allow the GPS usage. In an emergency, just use the input to put the actual address, or use the GPS to access to your address. Then, select the EPS of the user in the dropdown list, or digit it. As asynchonous, the map updates automatically with the ER center, ordered by proximity.

## Dependencies

**Front-End**:

| Tool/Library                                                                       | Version |
| ---------------------------------------------------------------------------------- | ------- |
| [React](https://reactjs.org/)                                                      | ^16.8.6 |

**Back-End**:

| Tool/Library                           | Version  |
| -------------------------------------- | -------- |
| [Express](https://expressjs.com/)      | 4.17.1   |
| [NodeJS](https://nodejs.org/)          | v10.14.0 |
| [MySQL](https://www.mysql.com/)        | 14.14    |

**Packaging/Deployment**:

| Tool/Library                      | Version  |
| --------------------------------- | -------- |
| [NodeJS](https://nodejs.org/en/)  | v10.14.0 |

## 

PythonessER is currently deployed at [PythonessER.site](https://ideadog.site)

## Authors

- **Olga Lucía Rodríguez Tolosa** <[luroto](https://github.com/luroto)>
- **Juan Diego Alejandro Valencia** <[Jdavp](https://github.com/Jdavp)>
- **Juan David Amaya Gaviria** <[GaviriaAmaya](https://github.com/GaviriaAmaya)>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
