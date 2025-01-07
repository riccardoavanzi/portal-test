  // Search configuration
  var from = "PEK";
  var to = "LHR";
  var dep = "2023-10-21";
  var arr = "2023-10-24";

  var request = {
    "search": {
      "travelers": [
        {
          "passengerTypeCode": "ADT"
        },
		{
          "passengerTypeCode": "ADT"
        }
      ],
      "commercialFareFamilies": [
        "ECONOMY",
      ],
      "itineraries": [
        {
          "originLocationCode": from,
          "destinationLocationCode": to,
          "departureDateTime": dep
        },
		{
          "originLocationCode": to,
          "destinationLocationCode": from,
          "departureDateTime": arr
        }
      ]
    },
    "portalFacts": [{"key":"corporateCodes", "value":"000001"}],
    "pointOfSale": "FR"
  }