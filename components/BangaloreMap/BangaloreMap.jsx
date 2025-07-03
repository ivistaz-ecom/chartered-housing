"use client"

import { useEffect, useRef } from "react"

const placesList = [
  { name: "Chartered Woodpecker", location: { lat: 13.1706, lng: 77.5721 } },
  {
    name: "Prestige Lakeside Habitat",
    location: { lat: 12.9575, lng: 77.7386 },
  },
  { name: "Brigade Gateway", location: { lat: 13.0116, lng: 77.5557 } },
]

const BangaloreMap = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    const loadMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 12.9716, lng: 77.5946 },
        zoom: 12,
      })

      const service = new window.google.maps.places.PlacesService(map)

      placesList.forEach((placeItem) => {
        const request = {
          query: placeItem.name,
          fields: [
            "name",
            "geometry",
            "place_id",
            "rating",
            "formatted_address",
          ],
        }

        service.findPlaceFromQuery(request, (results, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            results &&
            results[0]
          ) {
            const place = results[0]
            const marker = new window.google.maps.Marker({
              map,
              position: place.geometry.location,
            })

            const infoWindow = new window.google.maps.InfoWindow({
              content: `
                <div style="max-width: 260px; padding: 8px;">
                  <h3 style="margin: 0 0 4px;">${place.name}</h3>
                  <p style="margin: 0 0 4px;">${place.formatted_address}</p>
                  <p style="margin: 0;">⭐ ${place.rating || "N/A"}</p>
                </div>
              `,
              disableAutoPan: true,
            })

            marker.addListener("mouseover", () => {
              infoWindow.open(map, marker)
              setTimeout(() => {
                const closeBtn = document.querySelector(".gm-ui-hover-effect")
                if (closeBtn) closeBtn.style.display = "none"
              }, 0)
            })

            marker.addListener("mouseout", () => infoWindow.close())
          }
        })
      })
    }

    if (!window.google) {
      const script = document.createElement("script")
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyApliogQFJQzA7u-8MnvTFzci7N-AQ1Cl8&libraries=places"
      script.async = true
      script.onload = loadMap
      document.head.appendChild(script)
    } else {
      loadMap()
    }
  }, [])

  return <div ref={mapRef} style={{ height: "70vh", width: "100%" }} />
}

export default BangaloreMap
