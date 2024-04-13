const roomData = {
    "Standard Room": {
      available: 5,
      numbers: ["101", "102", "103", "104", "105"]
    },
    "Double Room": {
      available: 3,
      numbers: ["201", "202", "203"]
    },
    "Deluxe Suite": {
      available: 2,
      numbers: ["301", "302"]
    },
    "Heritage Room": {
      available: 4,
      numbers: ["401", "402", "403", "404"]
    }
  };
  
  function showRoomNumbers() {
    const roomType = document.getElementById("roomType").value;
    const roomNumberSelect = document.getElementById("roomNumber");
    const roomList = document.getElementById("roomAvailabilityList");
    roomNumberSelect.innerHTML = `<option value="" disabled selected>Select Room Number</option>`;
    roomList.innerHTML = "";
  
    if (roomType in roomData) {
      roomData[roomType].numbers.forEach(roomNumber => {
        const option = document.createElement("option");
        option.value = roomNumber;
        option.textContent = roomNumber;
        roomNumberSelect.appendChild(option);
  
        const li = document.createElement("li");
        li.textContent = roomNumber;
        roomList.appendChild(li);
      });
  
      const availableRooms = roomData[roomType].available;
      roomList.innerHTML += `<p>Available ${roomType}s: ${availableRooms}</p>`;
    }
  }
  
  function calculateTotal() {
    const roomType = document.getElementById("roomType").value;
    const checkInDate = new Date(document.getElementById("checkInDate").value);
    const checkOutDate = new Date(document.getElementById("checkOutDate").value);
    const totalAmountInput = document.getElementById("totalAmount");
  
    if (!roomType || !checkInDate || !checkOutDate) {
      alert("Please select room type and dates.");
      return;
    }
  
    const roomPrice = {
      "Standard Room": 5000,
      "Double Room": 8000,
      "Deluxe Suite": 12000,
      "Heritage Room": 15000
    }[roomType];
  
    const totalPrice = calculatePrice(checkInDate, checkOutDate, roomPrice);
    totalAmountInput.value = "₹ " + totalPrice.toLocaleString();
  }
  
  function calculatePrice(checkInDate, checkOutDate, roomPrice) {
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const days = Math.round(Math.abs((checkOutDate - checkInDate) / oneDay));
    const totalPrice = days * roomPrice;
    return totalPrice;
  }
  
  document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const customerName = document.getElementById("customerName").value;
    const roomType = document.getElementById("roomType").value;
    const roomNumber = document.getElementById("roomNumber").value;
    const checkInDate = document.getElementById("checkInDate").value;
    const checkOutDate = document.getElementById("checkOutDate").value;
    const totalAmount = document.getElementById("totalAmount").value;
  
    const confirmationMessage = `Thank you, ${customerName}! Your booking for ${roomType} (Room ${roomNumber}) from ${checkInDate} to ${checkOutDate} has been confirmed. Total Amount: ${totalAmount}`;
  
    alert(confirmationMessage);
  });
  