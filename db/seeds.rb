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
  password: 'password',
  dname: 'Steven Tortora'
})

awesome_user = User.create!({
  password: 'password',
  dname: 'Awsome User'
})

users = [steven_tortora, awesome_user]

latin_job_description = "{\"html\":\"<h3>Job Description </h3><p><br></p><p>Lorem ipsum dolor sit amet, te vim tractatos reformidans, id pri porro perfecto pertinacia. Eum te dolore volumus. Quo option feugiat ornatus cu, nam ad vero latine. Clita menandri in nam, mutat quando at ius, nisl idque debitis cu est. Vel at viderer noluisse perfecto.</p><p><br></p><p>Nisl ocurreret philosophia per cu. Aliquip consequuntur in sed, partem altera abhorreant te vix, vis ne tollit graeci. Labore conceptam vituperatoribus ut mel, suas numquam sed eu. Velit novum cum ex. Erant deserunt expetenda ad duo, elitr euismod salutatus quo ex.</p><p><br></p><h3>Must Have </h3><p><br></p><ul><li>At nec tota senserit. Cu erat lorem per. Cu dissentiet definitionem ius. In usu duis facer errem, timeam laboramus assentior pri ad.</li><li>Et nam quodsi mollis. Clita pertinax vel in, electram laboramus et has, ne primis inciderint scribentur per. His ut nominavi senserit. Et has odio vitae causae, inani graeci eu nec.</li><li>Omnis debet deterruisset vel ea, eam soluta propriae ei, ne corrumpit intellegam disputationi quo. Eos audiam regione vivendo ei, pri no decore pericula definitiones, unum sale ullum cu sed.</li><li>Salutatus persecuti at eum, his ut graeci imperdiet, ex mei tempor impetus. Ad has illud quodsi concludaturque, ad mei accumsan disputationi, quas ludus oportere est no. Ut enim movet quo, his et velit assum, forensibus omittantur no qui.&nbsp; </li></ul><p><br></p><h3>Nice To Have </h3><p><br></p><ul><li>An nec modus mollis vidisse, eu scaevola suavitate maluisset his, an sit inani discere. Duo ad postulant qualisque, nam id sensibus adolescens mediocritatem. Noster honestatis cu eam.&nbsp;</li><li>Vero aliquam scribentur usu in. Ipsum dicat eos no, ut has graeci viderer, elit tantas vim id.</li><li>Cu latine indoctum qualisque mel, in alia dolore pri. Eros clita cum et, omnis elitr at nam. Has purto nominavi voluptatum ad. Mel cu timeam adolescens, qui debet officiis ne. Eum eligendi ponderum expetenda cu.</li><li>Ei duo causae temporibus, ut sea oratio nullam, an solet virtute eleifend eos. Error inermis mei no, ut regione dignissim reprehendunt sit, quo et dicit sadipscing. Cu mei debet mucius eleifend. Eos id albucius philosophia.</li><li>Ut vel solum exerci, pro ne vide munere inimicus. Cu affert alterum indoctum his, id saepe putant cum. Qui an civibus accusam conclusionemque.&nbsp; </li></ul>\",\"richText\":{\"ops\":[{\"insert\":\"Job Description \"},{\"attributes\":{\"header\":3},\"insert\":\"\\n\"},{\"insert\":\"\\nLorem ipsum dolor sit amet, te vim tractatos reformidans, id pri porro perfecto pertinacia. Eum te dolore volumus. Quo option feugiat ornatus cu, nam ad vero latine. Clita menandri in nam, mutat quando at ius, nisl idque debitis cu est. Vel at viderer noluisse perfecto.\\n\\nNisl ocurreret philosophia per cu. Aliquip consequuntur in sed, partem altera abhorreant te vix, vis ne tollit graeci. Labore conceptam vituperatoribus ut mel, suas numquam sed eu. Velit novum cum ex. Erant deserunt expetenda ad duo, elitr euismod salutatus quo ex.\\n\\nMust Have \"},{\"attributes\":{\"header\":3},\"insert\":\"\\n\"},{\"insert\":\"\\nAt nec tota senserit. Cu erat lorem per. Cu dissentiet definitionem ius. In usu duis facer errem, timeam laboramus assentior pri ad.\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Et nam quodsi mollis. Clita pertinax vel in, electram laboramus et has, ne primis inciderint scribentur per. His ut nominavi senserit. Et has odio vitae causae, inani graeci eu nec.\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Omnis debet deterruisset vel ea, eam soluta propriae ei, ne corrumpit intellegam disputationi quo. Eos audiam regione vivendo ei, pri no decore pericula definitiones, unum sale ullum cu sed.\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Salutatus persecuti at eum, his ut graeci imperdiet, ex mei tempor impetus. Ad has illud quodsi concludaturque, ad mei accumsan disputationi, quas ludus oportere est no. Ut enim movet quo, his et velit assum, forensibus omittantur no qui.  \"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"\\nNice To Have \"},{\"attributes\":{\"header\":3},\"insert\":\"\\n\"},{\"insert\":\"\\nAn nec modus mollis vidisse, eu scaevola suavitate maluisset his, an sit inani discere. Duo ad postulant qualisque, nam id sensibus adolescens mediocritatem. Noster honestatis cu eam. \"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Vero aliquam scribentur usu in. Ipsum dicat eos no, ut has graeci viderer, elit tantas vim id.\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Cu latine indoctum qualisque mel, in alia dolore pri. Eros clita cum et, omnis elitr at nam. Has purto nominavi voluptatum ad. Mel cu timeam adolescens, qui debet officiis ne. Eum eligendi ponderum expetenda cu.\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Ei duo causae temporibus, ut sea oratio nullam, an solet virtute eleifend eos. Error inermis mei no, ut regione dignissim reprehendunt sit, quo et dicit sadipscing. Cu mei debet mucius eleifend. Eos id albucius philosophia.\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Ut vel solum exerci, pro ne vide munere inimicus. Cu affert alterum indoctum his, id saepe putant cum. Qui an civibus accusam conclusionemque.  \"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"}]}}"

latin_company_description = "{\"html\":\"<h3>About </h3><p><br></p><p>Lorem ipsum dolor sit amet, ei doming senserit mel. Eum ut dicta quando sensibus, tale aperiam postulant duo ut. Brute affert in est, usu nullam volumus dissentiet et. Vel ei suas vidisse viderer.</p><p><br></p><p>Et pro amet iudicabit. Fugit debitis vim ei, ius stet aperiam ad. Per brute inani putent eu, tibique ponderum mei id, nulla suavitate neglegentur ex duo. Tota natum sea cu. Ut nec idque sanctus reprimique, sumo voluptatibus cum ex, postea nusquam prodesset quo an. Ad pri vero liber. Vim harum decore ei, ius graece conceptam deseruisse ei, in vim ullum dissentias.</p>\",\"richText\":{\"ops\":[{\"insert\":\"About \"},{\"attributes\":{\"header\":3},\"insert\":\"\\n\"},{\"insert\":\"\\nLorem ipsum dolor sit amet, ei doming senserit mel. Eum ut dicta quando sensibus, tale aperiam postulant duo ut. Brute affert in est, usu nullam volumus dissentiet et. Vel ei suas vidisse viderer.\\n\\nEt pro amet iudicabit. Fugit debitis vim ei, ius stet aperiam ad. Per brute inani putent eu, tibique ponderum mei id, nulla suavitate neglegentur ex duo. Tota natum sea cu. Ut nec idque sanctus reprimique, sumo voluptatibus cum ex, postea nusquam prodesset quo an. Ad pri vero liber. Vim harum decore ei, ius graece conceptam deseruisse ei, in vim ullum dissentias.\\n\"}]}}"

company_pictures = [
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-3ds-max-64.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-active-directory-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-approximately-equal-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-artichoke-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-artificial-intelligence-filled-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-artificial-intelligence-filled-64.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-biotech-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-bot-16.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-bot-40.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-bot-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-bring-forward-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-chat-room-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-currency-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-connection-status-on-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-deviantart-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-evil-40.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-evil-64.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-fuji-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-godtier-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-iceberg-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-innovation-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-intelligence-16.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-merge-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-merge-64.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-mind-map-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-mind-map-64.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-modern-art-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-mountain-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-multichannel-40.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-multichannel-64.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-network-64.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-plasmid-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-poll-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-registry-editor-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-robot-2-40.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-signal-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-skyatlas-filled-64.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-source-code-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-sync-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-synchronize-64.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-test-tube-64.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-thinking-bubble-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-touch-id-48.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-volcano-40.png',
  'https://s3.amazonaws.com/job-boardapp-seeds/icons8-wi-fi-48.png'
].shuffle

cities = [
  'New York',
  'San Francisco',
  'Boston',
  'Miami',
  'Los Angeles',
  'Seattle',
  'Austin',
  'Chicago',
  'London',
  'Atlanta',
  'Washington DC'
]

industries = ['Ad Tech', 'Agriculture', 'Arts', 'FinTech', 'eCommerce', 'Digital Media', 'Sales', 'Software', 'GreenTech', 'Payments', 'Professional Services', 'Machine Learning']
team_sizes = ['<10', '10-25', '25-50', '50-100', '100-200', '200-300', '300-500', '500+']
phone_numbers = ['5555555555', '6073213700', '8888888888', '4444444444', '3333333333']

require 'open-uri'

companies = [
  'Metics',
  'OkCode',
  'UsaBit',
  'Metah',
  'Artics',
  'Cartup',
  'Computio',
  'Progix',
  'Strix',
  'Symbit',
  'Filems',
  'NovaSys',
  'Logify',
  'Softyk',
  'Modesk'
].map do |name|
  company = Company.create!({
    title: name,
    website: 'company.com',
    tagline: 'Lorem ipsum dolor sit amet, alienum delicata te vix, in.',
    description: latin_company_description,
    city: cities.sample,
    user_id: users.sample.id,
    twitter: 'twitter.com',
    linked_in: 'linkedin.com',
    team_size: team_sizes.sample,
    industry: industries.sample,
    phone_number: phone_numbers.sample,
    })

    picture_url = company_pictures.sample
    file = open(picture_url)
    
    filename = picture_url[44...picture_url.length]
    puts filename
    company.picture.attach(io: file, filename: filename)

    company
end

jobs = {
  'Engineer/Developer' => ['Software Engineer', 'Frontend Engineer', 'Backend Engineer', 'Web Developer', 'Senior Software Engineer', 'UI Engineer'],
  'Marketing' => ['Marketing Specialist'],
  'Design/UX' => ['UI Designer', 'UX Designer', 'Graphic Designer'],
  'Product' => ['Product Manager'],
  'Finance' => ['Financial Analyst'],
  'HR' => ['HR Specialist'],
  'Sales' => ['Account Manager', 'Account Executive'],
  'Project Management' => ['Project Manager'],
  'Content' => ['Product Designer', 'Technical Writer','Technician', 'IT Billing Lead', 'Business Representative'],
  'Data/Analytics' => ['Data Scientist', 'Machine Learning Engineer'],
  'Operations' => ['Research Architect', 'Technician', 'IT Billing Lead', 'Business Representative']
}

job_categories = jobs.keys.map do |category_name|
  JobCategory.create!({
    name: category_name
  })
end

job_types = ['Full Time', 'Part Time', 'Contract', 'Internship']
salaries = ['$20000-$30000', '$30000-$40000','$40000-$50000','$50000-$60000','$60000-$70000','$70000-$80000','$80000-$90000','$90000-$100000','$100000-$1100000', '$110000-$1200000','$120000-$1300000','$130000-$1400000','$140000-$1500000','$150000-$1600000','$160000-$1700000','$170000-$1800000','$180000-$1900000','$190000-$2000000','$200000+']
levels = ['Junior', 'Mid', 'Senior', 'Lead', 'Assistant Manager', 'Manager', 'Department Head', 'Executive']
experiences = ['0-2 Years', '2-3 Years', '3-5 Years', '6-7 Years', '6-7 Years', '8-9 Years', '9-10 Years', '10+ Years']
qualifications = ['Associate Degree', 'Bachelor Degree', 'Master Degree', 'Doctorate Degree']
languages = ['Arabic', 'English', 'Spanish', 'Mandarin', 'French', 'Portuguese', 'Hindi']

100.times do
  company = companies.sample
  job_category = job_categories.sample

  JobPost.create!({
    title: jobs[job_category.name].sample,
    city: company.city,
    description: latin_job_description,
    job_type: job_types.sample,
    salary: salaries.sample,
    career_level: levels.sample,
    experience: experiences.sample,
    industry: company.industry,
    qualification: qualifications.sample,
    language: languages.sample,
    company_id: company.id,
    job_category_id: job_category.id
  })
end
