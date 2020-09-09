const ibm = {
  alt: 'IBM',
  company: 'IBM Corporation (Apr 2017 - Present)',
  title: 'Software Developer',
  apiGateway: {
    details: 'Create, secure, share, and manage APIs that access IBM Cloud resources.',
    url: 'https://cloud.ibm.com/catalog/services/api-gateway#about',
    tech: 'React, Redux, and Webpack',
    title: 'API Gateway',
    work: [
      'Reduced the App bundle size by 50% thereby making the application load faster.',
      'Built a UI microservice for APIC 6.0 on Cloud that aids the users and businesses to create their own API Connect services and manage them.',
      'Built a provisioning service for API Gateway service that enables thousands of users to create their own gateway services.',
      'Developed a robust API details UI microservice for API Gateway service that enables thousands of users and businesses to create and manage their own APIs on a cloud platform.',
    ],
  },
  cxlPortal: {
    details: 'This web app is used by insurance payers and providers to manage their plans.',
    tech: 'JavaScript, JQuery, Java, and IBM WebSphere',
    title: 'Customer Experience Layer Portal',
    work: [
      'Built a notification component that notifies the user with all types of notification.',
      'Improved the UI response time for status change of notifications and delete operation.',
      'Designed and implemented an algorithm that chooses the correct order of product logos to be displayed in all the product pages.',
      'Built an API to upload, get and delete alert messages, workbooks and dashboards in the portal.',
    ],
  },
  sugarIq: {
    details: 'The Sugar.IQ diabetes assistant is a first-of-its-kind cognitive app that helps detect important patterns and trends for people with diabetes. This app continually analyzes how an individual’s glucose levels respond to their food intake, insulin dosages, daily routines, and other factors and uses IBM Watson analytics to find patterns in diabetes data and offers real-time, personalized insights.',
    url: 'https://www.medtronicdiabetes.com/products/sugar.iq-diabetes-assistant',
    tech: 'Swift, Docker, and Kubernetes',
    title: 'Sugar.IQ',
    work: [
      'Implemented OAuth authentication, thereby avoiding the maintenance of user records at our database.',
      'Improved automated test coverage from 9% to 43%.',
      'Implemented a mechanism to include insulin and workout data into the home stream feed.',
      'Implemented a mechanism to add food using barcode, making it easier for the user to log it.',
    ],
  },
};

const fb = {
  alt: 'FB',
  company: 'Facebook Inc. (May 2016 - Aug 2016)',
  title: 'Software Developer, Intern',
  fbLite: {
    details: 'Facebook Lite is an Android app designed for low speed connections and low spec phones. Facebook Lite is designed to use less RAM and CPU power, as well, so you’ll get a smoother experience on a cheaper and  less powerful phones. Facebook Lite even works on older phones that are no longer supported by the regular app. Facebook Lite is really designed to work on slow or unstable internet connections like 2G networks or in rural areas with a bad signal.',
    tech: 'React Native, GraphQL, Relay, Buck, and Flow',
    title: 'Facebook Lite',
    work: [
      'Designed the comments section',
      'Designed and implemented an algorithm that decides on how to delete certain types of tokens in the comments.',
      'Built a TokenInput component which does text processing based on tokens (Mentions, Hashtags, URLs, Groups, Locations, etc.), for their mobile app.',
      'Built a Stateless MentionsInput (search for friends and tag them) component, which replaces the existing Stateful component. It could be used in any FB product on both Android and iOS platforms.',
    ],
  },
};

const infy = {
  alt: 'Infosys',
  company: 'Infosys Limited (Oct 2012 - Jun 2015)',
  title: 'Senior Systems Engineer',
  ezforms: {
    details: 'This web app is used by a contracting company to manage the payroll services of their regular employees and contractors.',
    tech: 'C#, .NET, and SQL Server',
    title: 'EZForms and Client Portal',
    work: [
      'Reduced the operation team’s work by 70% through automation.',
      'Redesigned the file sharing among the web farm clusters which resulted in faster and efficient file share.',
      'Implemented an interface to share the necessary details among the systems which resulted in reduction of 45% of manual work.',
    ],
  },
};

export {
  fb,
  ibm,
  infy,
};
