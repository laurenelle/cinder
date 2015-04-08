Router.map(function() {
  this.route('pupProfile', {
    path: '/'
  });
});

Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
    footer: {to: 'footer'}
  }
});