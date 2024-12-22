# 90's favourite game
![image](https://github.com/user-attachments/assets/b67ed13f-4d0c-4541-bb4b-74f220eb092e)


This is a simple Express.js API that serves wrestler data, including details such as ring name, real name, rank, number of fights, physical attributes, and images.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- 
## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)
- 
### Installation
1. Clone the repository:
git clone https://github.com/your-username/wrestler-data-api.git
Copy2. Navigate to the project directory:
cd wrestler-data-api
Copy3. Install the dependencies:
npm install
Copy
## Usage
### Deployment
--------------
This project is deployed on Vercel and can be accessed at the following URL:
## https://wrestler-data-api.vercel.app/api/wrestlers
### Contributing
----------
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
### License
This project is licensed under the MIT License.
Copy
This README covers the key aspects of the wrestler data API project, including:
- Getting Started: Explains the prerequisites and installation steps.
- Usage: Describes the available API endpoint and provides an example response.
- Deployment: Mentions the live deployment on Vercel and the public URL.
- Contributing: Encourages contributions and provides guidelines.
- License: Specifies the MIT License for the project.
Feel free to customize this README further to suit your specific needs or add more details
### API Endpoints
- GET /api/wrestlers: Returns an array of wrestler data.
Example response:
```json
[
{
 "ringName": "Undertaker",
 "realName": "Mark Calloway",
 "rank": "1",
 "fights": "305",
 "chest": "51",
 "biceps": "21.5",
 "height": "6'10",
 "weight": "328",
 "image": "/Undertaker.jpg"
},
{
 "ringName": "The Rock",
 "realName": "Dwayne Johnson",
 "rank": "2",
 "fights": "316",
 "chest": "51.5",
 "biceps": "65",
 "height": "6'5",
 "weight": "275",
 "image": "/rock.webp"
},
]
