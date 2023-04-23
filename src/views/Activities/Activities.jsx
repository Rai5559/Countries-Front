import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteActivity } from "../../redux/actions";
import ActivitiesBody from "../../components/activityComponent/ActivityBody";

const Activities = () => {
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();


  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this activity?")) {
      dispatch(deleteActivity(id))?window.location.reload():null;
    }
  };

  return (
    <div>
      <ActivitiesBody activities={activities} handleDelete={handleDelete} />
    </div>
  );
};

export default Activities;
