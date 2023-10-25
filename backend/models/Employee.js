const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
    {
Name: {type: String, required: true},
Age: {type: Number, required: true},

},
{
    timestamps: true,
  
});
const Employee = mongoose.model("Employee", employeeSchema);

module.exports=Employee;
