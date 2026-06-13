result = []
while(true)
    {
        a = parseInt(prompt("Select Any one: 1.Upload Details 2.View Result 3.Exit"))
        if (a == 1)
            {
                b = parseInt(prompt("Enter the total students:"))
                for(i = 0 ; i < b ; i++)
                    {
                        regno = parseInt(prompt("enter the register number of student:"))
                        name = prompt("enter the name of student:")
                        Eng = parseInt(prompt("enter the english mark of " +name , ":"))
                        Tam = parseInt(prompt("enter the tamil mark of " +name ,":"))
                        Mat = parseInt(prompt("enter the maths mark of " +name ,":"))
                        Sci = parseInt(prompt("enter the science mark of " +name ,":"))
                        Soc = parseInt(prompt("enter the social mark of " +name ,":")) 
                        result.push([regno, name, Eng, Tam, Mat, Sci, Soc])
                        console.log("Uploaded Successfully!")  
                    }
            }
        else if(a == 2)
            {
                console.log("Results Here!")
                strresult = parseInt(prompt("enter the register number of student:")) 
                for (i = 0 ; i < result.length ; i++ )
                    {
                        if (strresult == result[i][0])
                        {
                            let name = result[i][1]
                            let regno = result[i][0]
                            let engmark = result[i][2]
                            let tammark = result[i][3]
                            let matmark = result[i][4]
                            let scimark = result[i][5]
                            let socmark = result[i][6]
                            total = engmark + tammark + matmark + scimark + socmark
                            average = total / 5

                            console.log("Name:" +name)
                            console.log("Register Number: "+regno)
                            console.log("Engish Mark is:" +engmark)
                            console.log("Tamil Mark is:" +tammark)
                            console.log("Maths Mark is:" +matmark)
                            console.log("Science Mark is:" +scimark)
                            console.log("Social Mark is:" +socmark)
                            console.log("Total:" +total)
                            if(average > 50)
                                {
                                    console.log("PASS")
                                }
                            else
                                {
                                    console.log("Failed")
                                }
                        }
                    }
            }
        else
            {
                break
            }
    }