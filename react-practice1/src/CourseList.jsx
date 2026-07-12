import html from "./assets/html.jpg";
import css from "./assets/css.jpg";
import javascript from "./assets/js.jpg";
import Course from "./Course";

function CourseList() {

    const courses = [
        {
            name: "HTML",
            price: "$199",
            image: html,
            rating: 4.5
        },
        {
            name: "CSS",
            price: "$199",
            image: css,
            rating: 4.5
        },
        {
            name: "JavaScript",
            price: "$199",
            image: javascript,
            rating: 4.5
        }
    ];

    return (
        <>
            {
                courses.map((course) => (
                    <Course
                        key={course.name}
                        name={course.name}
                        price={course.price}
                        image={course.image}
                        rating={course.rating}
                    />
                ))
            }
        </>
    );
}

export default CourseList;