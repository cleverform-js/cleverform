
// Desired library usage

var form1 = CleverForm({
  id: "form1",
  inputs: {
    name: "required|min:4|max:20",
    age: "required|numeric",
  },

  onInit: function () {},
  onError: function () {},
  onSuccess: function () {},
});
