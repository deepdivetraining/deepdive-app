
Accounts.emailTemplates.siteName = 'DeepDive.training';
Accounts.emailTemplates.from = 'DeepDive.training <hi@deepdive.training>';

Accounts.emailTemplates.verifyEmail = {
  subject: (user) => {
    return `Welcome to DeepDive.training, ${user.profile.name}`;
  },
  text: () => { },
  from: () => { },
}

Accounts.emailTemplates.enrollAccount = {
  subject: (user) => {
    return `Welcome to DeepDive.training, ${user.profile.name}`;
  },
  text: (user, url) => {
    return 'You have been selected to participate in building a better future!'
      + ' To activate your account, simply click the link below:\n\n'
      + url;
  }
};
Accounts.emailTemplates.verifyEmail = {
   subject() {
      return "Activate your account now!";
   },
   text(user, url) {
      return `Hey ${user}! Verify your e-mail by following this link: ${url}`;
   }
};

Accounts.emailTemplates.loginNoPassword = {
  subject: (user) => {
    return `Login on DeepDive.training`;
  },
  text: (user, url) => {
    return `Hi! To login, simple click this link: ${url}`;
  }
}
