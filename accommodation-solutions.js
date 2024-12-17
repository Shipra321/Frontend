function searchHousing() {
    const location = document.getElementById('location').value;
    const price = document.getElementById('price').value;
    const resultsContainer = document.getElementById('results');

    if (!location || !price) {
      resultsContainer.innerHTML = "<p style='color: red;'>Please fill out all fields!</p>";
      return;
    }

    // Simulating a search with AI recommendation (dummy data)
    const results = [
      { title: 'Cozy 2-Bedroom Apartment', location: location, price: 1200 },
      { title: 'Shared Living Space - Room for Rent', location: location, price: 600 },
      { title: 'Studio Apartment with Great Amenities', location: location, price: 1500 },
    ];

    resultsContainer.innerHTML = '<h3>Search Results:</h3>';
    results.forEach(result => {
      const div = document.createElement('div');
      div.classList.add('result');
      div.innerHTML = `
        <h4>${result.title}</h4>
        <p>Location: ${result.location}</p>
        <p>Price: $${result.price}</p>
      `;
      resultsContainer.appendChild(div);
    });
  }

  function getAIRecommendations() {
    alert("Here are some additional tips for settling in: \n\n- Introduce yourself to neighbors.\n- Set up essential services like internet and utilities.\n- Plan local excursions to explore your new neighborhood.\n- Organize your space efficiently for comfort and ease of access.");
  }