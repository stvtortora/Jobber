# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
JobPost.destroy_all
Company.destroy_all
JobCategory.destroy_all
#make a user
#make a company
#make some job_categories
#make some job posts

steven_tortora = User.create!({
  email: 'stvtortora@gmail.com',
  fname: 'Steven',
  lname: 'Tortora',
  password: 'password',
  dname: 'Steven Tortora',
  city: 'NewYork'
})

puts steven_tortora.id

tenfold = Company.create!({
  title: 'Tenfold',
  website: 'tenfold.com',
  tagline: 'We fold ten times',
  description: 'Tenfold merges technology with the number ten in ways you never thought possible',
  city: 'New_York',
  user_id: steven_tortora.id,
  twitter: 'twitter.com',
  linked_in: 'linkedin.com',
  team_size: '<10',
  industry: 'Software',
  phone_number: '6073213700'
})

engineer_developer = JobCategory.create!({
  name: 'Engineer/Developer'
})

marketing  = JobCategory.create!({
  name: 'Marketing'
})

design_ux = JobCategory.create!({
  name: 'Design/UX'
})

product = JobCategory.create!({
  name: 'Product'
})

finance = JobCategory.create!({
  name: 'Finance'
})

hr = JobCategory.create!({
  name: 'HR'
})

sales = JobCategory.create!({
  name: 'Sales'
})

project_management = JobCategory.create!({
  name: 'Project_Management'
})

content = JobCategory.create!({
  name: 'Content'
})

data_analytics = JobCategory.create!({
  name: 'Data/Analytics'
})

operations = JobCategory.create!({
  name: 'Operations'
})


JobPost.create!({
  title: 'Software Engineer',
  city: 'New_York',
  description: 'Job Description
  We are looking for a smart Frontend Engineer who can participate in building our next generation interface. You will get a chance to get your hands dirty with our core product working directly with the Leadership and Business. You will also participate in web security, compatibility and experience design.

  This involves a lot of collaboration with the engineering and R&D Teams to prioritise and launch new features. You will also play an important role in deployments, product roadmaps and data security.

  Experience
  Minimum of 3 Years relevant experience with JS libraries and ReactJS

  Must Have
  Proficient in  ReactJS and other5modern JS libraries/frameworks
  Proficient in ES6/7 object oriented JavaScript and architecture and development of Single page web applications.
  Basic understanding of nodeJS and its package managers like npm and yarn.
  Proficient in flux pattern based development and libraries build upon it like redux, mobX and its derivative micro frameworks like reduxForm etc.
  Proficient in Event handling/event driven programming and creating event observers at appropriate abstraction levels.
  Strong understanding of build tools like web-pack, its configuration, scripting and environment management (dev/test/prod).
  Basic knowledge of HTML5, CSS3 and its frameworks and pre-processors.
  Should be able to resolve cross browser incompatibilities associates with JS and CSS…
  Working Knowledge of D3 and similar JS charting libraries
  Nice to Have
  Working knowledge of User Experience Design
  Working knowledge of REST API design.
  Working knowledge of responsive design.
  Good understanding of Web 2.0 and Semantic Web standards.
  Good understanding of data-structures and algorithms.
  Ability to understand and balance performance tradeoffs.
  Experience with programming languages like Ruby on Rails, Python, Node JS
  Experience in deploying complex systems in AWS
  Experience with best practices such as A/B testing.
  Just to Add
  Creative Workplace and open work culture. Creativity and out of the box thinking is nurtured.

  Some perks: Excellent Filter Coffee, Free lunches, PS4 and Fooseball breaks, stocked kitchen topped up with a nice set of people to work with!',
  job_type: 'Full_Time',
  salary: '$90000-$100000',
  career_level: 'Mid',
  experience: '2-3_Years',
  industry: 'Software',
  qualification: 'Bachelor_Degree',
  language: 'English',
  keyword_a: 'GreenTech',
  keyword_b: 'Development',
  keyword_c: 'Front_End',
  company_id: tenfold.id,
  job_category_id: engineer_developer.id
})

JobPost.create!({
  title: 'UX Designer',
  city: 'New_York',
  description: 'Job Description
  We are looking for a smart Frontend Engineer who can participate in building our next generation interface. You will get a chance to get your hands dirty with our core product working directly with the Leadership and Business. You will also participate in web security, compatibility and experience design.

  This involves a lot of collaboration with the engineering and R&D Teams to prioritise and launch new features. You will also play an important role in deployments, product roadmaps and data security.

  Experience
  Minimum of 3 Years relevant experience with JS libraries and ReactJS

  Must Have
  Proficient in  ReactJS and other5modern JS libraries/frameworks
  Proficient in ES6/7 object oriented JavaScript and architecture and development of Single page web applications.
  Basic understanding of nodeJS and its package managers like npm and yarn.
  Proficient in flux pattern based development and libraries build upon it like redux, mobX and its derivative micro frameworks like reduxForm etc.
  Proficient in Event handling/event driven programming and creating event observers at appropriate abstraction levels.
  Strong understanding of build tools like web-pack, its configuration, scripting and environment management (dev/test/prod).
  Basic knowledge of HTML5, CSS3 and its frameworks and pre-processors.
  Should be able to resolve cross browser incompatibilities associates with JS and CSS…
  Working Knowledge of D3 and similar JS charting libraries
  Nice to Have
  Working knowledge of User Experience Design
  Working knowledge of REST API design.
  Working knowledge of responsive design.
  Good understanding of Web 2.0 and Semantic Web standards.
  Good understanding of data-structures and algorithms.
  Ability to understand and balance performance tradeoffs.
  Experience with programming languages like Ruby on Rails, Python, Node JS
  Experience in deploying complex systems in AWS
  Experience with best practices such as A/B testing.
  Just to Add
  Creative Workplace and open work culture. Creativity and out of the box thinking is nurtured.

  Some perks: Excellent Filter Coffee, Free lunches, PS4 and Fooseball breaks, stocked kitchen topped up with a nice set of people to work with!',
  job_type: 'Full_Time',
  salary: '$80000-$90000',
  career_level: 'Mid',
  experience: '2-3_Years',
  industry: 'GreenTech',
  qualification: 'Bachelor_Degree',
  language: 'English',
  keyword_a: 'UX',
  keyword_b: 'Design',
  keyword_c: 'Creative',
  company_id: tenfold.id,
  job_category_id: design_ux.id,
  picture: "https://s3.amazonaws.com/job-boardapp-dev/job+post+pictures/flannel+picture.jpg"
})

JobPost.create!({
  title: 'Financial Analyst',
  city: 'New_York',
  description: 'Job Description
  We are looking for a smart Frontend Engineer who can participate in building our next generation interface. You will get a chance to get your hands dirty with our core product working directly with the Leadership and Business. You will also participate in web security, compatibility and experience design.

  This involves a lot of collaboration with the engineering and R&D Teams to prioritise and launch new features. You will also play an important role in deployments, product roadmaps and data security.

  Experience
  Minimum of 3 Years relevant experience with JS libraries and ReactJS

  Must Have
  Proficient in  ReactJS and other5modern JS libraries/frameworks
  Proficient in ES6/7 object oriented JavaScript and architecture and development of Single page web applications.
  Basic understanding of nodeJS and its package managers like npm and yarn.
  Proficient in flux pattern based development and libraries build upon it like redux, mobX and its derivative micro frameworks like reduxForm etc.
  Proficient in Event handling/event driven programming and creating event observers at appropriate abstraction levels.
  Strong understanding of build tools like web-pack, its configuration, scripting and environment management (dev/test/prod).
  Basic knowledge of HTML5, CSS3 and its frameworks and pre-processors.
  Should be able to resolve cross browser incompatibilities associates with JS and CSS…
  Working Knowledge of D3 and similar JS charting libraries
  Nice to Have
  Working knowledge of User Experience Design
  Working knowledge of REST API design.
  Working knowledge of responsive design.
  Good understanding of Web 2.0 and Semantic Web standards.
  Good understanding of data-structures and algorithms.
  Ability to understand and balance performance tradeoffs.
  Experience with programming languages like Ruby on Rails, Python, Node JS
  Experience in deploying complex systems in AWS
  Experience with best practices such as A/B testing.
  Just to Add
  Creative Workplace and open work culture. Creativity and out of the box thinking is nurtured.

  Some perks: Excellent Filter Coffee, Free lunches, PS4 and Fooseball breaks, stocked kitchen topped up with a nice set of people to work with!',
  job_type: 'Full_Time',
  salary: '$90000-$100000',
  career_level: 'Mid',
  experience: '2-3_Years',
  industry: 'GreenTech',
  qualification: 'Bachelor_Degree',
  language: 'English',
  keyword_a: 'Finance',
  keyword_b: 'Data_Analysis',
  keyword_c: 'Big_Data',
  company_id: tenfold.id,
  job_category_id: finance.id,
  picture: "https://s3.amazonaws.com/job-boardapp-dev/job+post+pictures/flannel+picture.jpg"
})
