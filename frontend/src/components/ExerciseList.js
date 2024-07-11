import React, { useState, useEffect } from "react";
import axios from "axios";

const ExerciseList = () => {
	const [exercises, setExercises] = useState([]);

	useEffect(() => {
		axios
			.get("/api/exercises/")
			.then((response) =>
				setExercises(response.data).catch((error) => console.log(error))
			);
	}, []);
};

return (
	<div>
		<h2>Exercise List</h2>
		<ul>
			{exercises.map((exercise) => (
				<li key={exercise.id}>{exercise.name}</li>
			))}
		</ul>
	</div>
);

export default ExerciseList;
