import Course from "./Course";

import useFetch from "./useFetch";

function CourseList() {


        const [courses, dummy, error] = useFetch('http://localhost:3000/courses');

        function handleDelete(id){
            const newCourses = courses.filter((course) => course.id !== id)
            setCourses(newCourses);
        }

    
    //courses.sort((x,y) => y.rating - x.rating)

    if(!courses)
    {
        return (
        <>
        {!error && <img src = "data\assets\loading.gif" />}
        {error && <p>{error}</p>}
        </>)
    }

    const coursesList = courses.map(
        (course) => 
        <Course 
            key = {course.id}
            name = {course.name}
            price = {course.price}
            image = {course.image}
            rating = {course.rating}
            delete = {handleDelete}
            id = {course.id}
        />
    );


    return (
        <>
        {coursesList}
        <button onClick = {() => setDummy(true)}>dummy</button>
        </>
    );
}

export default CourseList;

//npx json-server --watch data/dummyData.json --port 3000 --static ./data