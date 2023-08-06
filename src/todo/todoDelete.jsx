import Swal from "sweetalert2";
import { RemoveTodo } from "../redux/state/todoSlice";
import { store } from "../redux/store/store";

const todoDelete = (i) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#239034",
    cancelButtonColor: "#F42929",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      //   Swal.fire("Deleted!", "Your file has been deleted.", "success");
      store.dispatch(RemoveTodo(i));
    }
  });
};

export default todoDelete;
