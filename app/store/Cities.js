Ext.define('MyApp.store.Cities', {
  extend: 'Ext.data.Store',
  alias: 'store.cities',
  model:'MyApp.model.City',
  fields: ['cityId', 'city', 'stateId'], // Assuming you have a field to store the state ID
  data: {
      'AL': [
          { cityId: 101, city: 'Birmingham', stateId: 'AL' },
          { cityId: 102, city: 'Montgomery', stateId: 'AL' },
          { cityId: 103, city: 'Mobile', stateId: 'AL' },
          // Add more cities for Alabama as needed
      ],
      'AK': [
          { cityId: 201, city: 'Anchorage', stateId: 'AK' },
          { cityId: 202, city: 'Fairbanks', stateId: 'AK' },
          { cityId: 203, city: 'Juneau', stateId: 'AK' },
          // Add more cities for Alaska as needed
      ],
      'AZ': [
          { cityId: 301, city: 'Phoenix', stateId: 'AZ' },
          { cityId: 302, city: 'Tucson', stateId: 'AZ' },
          { cityId: 303, city: 'Mesa', stateId: 'AZ' },
          // Add more cities for Arizona as needed
      ],
      // Add data for all the states
      // Repeat this pattern for other states
  },
  constructor: function(config) {
      this.callParent([config]);
      this.loadData(this.getCitiesData());
  },
  getCitiesData: function() {
    var citiesData = [];
    for (var stateId in this.data) {
        if (this.data.hasOwnProperty(stateId)) {
            var stateCities = this.data[stateId];
            if (Array.isArray(stateCities)) { // Check if stateCities is an array
                for (var i = 0; i < stateCities.length; i++) {
                    citiesData.push(stateCities[i]);
                }
            }
        }
    }
    return citiesData;
}

});
