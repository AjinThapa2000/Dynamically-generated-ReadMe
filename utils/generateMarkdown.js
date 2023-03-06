// function to generate markdown for README
function getLicense(license){
  if (license!=='None'){
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

const getLicenseLink= (license)=>{
  if(license!=='None'){
    return `\n * [License](#license)`
  }
}
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${getLicense(data.license)}

  ### Discription

  ${data.discription}

  ### Table of content.

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Test](#Test)

  * [Questions](#questions)

  ## Installation

  Run given Command
  
  \`\`\`
  ${data.installation}
  \`\`\`


  ## Usage
  ${data.usage}

  ## License

  ${getLicenseLink(data.license)}

  ## Contributing

  ${data.contributing}

  ## Test

  use command below:
  
  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  write me at: ${data.email}

  view my work at: https://github.com/${data.github}

  

`;
}

module.exports = generateMarkdown;
