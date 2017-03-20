function Portfolio(client, projectSpecs, img) {
  this.client = client,
  this.projectSpecs = projectSpecs;
  this.img = img;

};
var client1 = new Portfolio ("Yellow Dog Fly Fishing", "Large format book layout", "http://maxwell-creative.com/wp-content/uploads/2014/02/Belieze-Portfolio-cover.jpg" );
var client2 = new Portfolio ("River Roots Productions", "Website, Print collateral, Animation and Evironmental graphics", "http://maxwell-creative.com/wp-content/uploads/2013/07/River-roots-feature.jpg");
var client3 = new Portfolio ("Coldsmoke Winter Film", "Print and Digital campaign", "http://maxwell-creative.com/wp-content/uploads/2014/02/CSA-feature3.jpg" );
var client4 = new Portfolio ("Chasing Niagara", "Marketing collaterol", "http://maxwell-creative.com/wp-content/uploads/2016/05/Portfolio-feature-image-Chasing-Nnew1.jpg");
var client5 = new Portfolio ("Big Sky Journal", "Branding overhaul and Web Platform", "http://maxwell-creative.com/wp-content/uploads/featureBigskyJ-1024x1024-30bba5r5mrzn5pp6n9fll6.jpg" );
var client6 = new Portfolio ("World Class Academy", "Print and digital marketing collaterol", "http://maxwell-creative.com/wp-content/uploads/Portfolio-feature-image-WCA-1024x1024-30fy0a69ulnqn4h6gham8a.jpg");


Portfolio.prototype.getInfo = function () {
  return "Client: " + this.client + " // " + "Project Specs: " + this.projectSpecs
};

var allPortfolio = [client1, client2, client3, client4, client5, client6,];

var portfolioVue = new Vue({
  'el': '#portfolio',
  'data': {
    portfolio: allPortfolio[0],
    allPortfolio: allPortfolio
  }
});
