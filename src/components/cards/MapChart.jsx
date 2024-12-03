import React from "react";
import DatamapsIndia from "react-datamaps-india";

const MapChart = () => {
  return (
    <div style={{ position: "relative", width: "70%", margin: "auto" }}> {/* Centering the map container and setting a max-width */}
      <DatamapsIndia
        style={{
          position: "relative",
          height: "500px", // Set a fixed height
          width: "100%" // Map will take 100% of the container's width
        }}
        regionData={{
          "Andaman & Nicobar Island": { value: 150 },
          "Andhra Pradesh": { value: 470 },
          "Arunachal Pradesh": { value: 248 },
          Assam: { value: 528 },
          Bihar: { value: 755 },
          Chandigarh: { value: 95 },
          Chhattisgarh: { value: 1700 },
          Delhi: { value: 1823 },
          Goa: { value: 508 },
          Gujarat: { value: 624 },
          Haryana: { value: 1244 },
          "Himachal Pradesh": { value: 640 },
          "Jammu & Kashmir": { value: 566 },
          Jharkhand: { value: 814 },
          Karnataka: { value: 2482 },
          Kerala: { value: 899 },
          Lakshadweep: { value: 15 },
          "Madhya Pradesh": { value: 1176 },
          Maharashtra: { value: 727 },
          Manipur: { value: 314 },
          Meghalaya: { value: 273 },
          Mizoram: { value: 306 },
          Nagaland: { value: 374 },
          Odisha: { value: 395 },
          Puducherry: { value: 245 },
          Punjab: { value: 786 },
          Rajasthan: { value: 1819 },
          Sikkim: { value: 152 },
          "Tamil Nadu": { value: 2296 },
          Telangana: { value: 467 },
          Tripura: { value: 194 },
          "Uttar Pradesh": { value: 2944 },
          Uttarakhand: { value: 1439 },
          "West Bengal": { value: 1321 }
        }}
        hoverComponent={({ value }) => (
          <div>
            <div>
              {value.name} {value.value} OCs
            </div>
          </div>
        )}
        mapLayout={{
          legendTitle: "Institute Density",
          startColor: "#b3d1ff",
          endColor: "#005ce6",
          hoverTitle: "Count",
          noDataColor: "#f5f5f5",
          borderColor: "#8D8D8D",
          hoverColor: "blue",
          hoverBorderColor: "green",
        }}
      />
    </div>
  );
};

export default React.memo(MapChart);
