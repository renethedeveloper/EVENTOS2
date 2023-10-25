const mongoose = require("mongoose");

// Set your MongoDB connection string
const connectionString = `mongodb+srv://Rene:${process.env.MONGO_PASS}@cluster0.zbldfqq.mongodb.net/EVENTS?retryWrites=true&w=majority`;
console.log(connectionString);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Log when connected
mongoose.connection.once("open", () => {
    console.log('Connected to MongoDB');
});
