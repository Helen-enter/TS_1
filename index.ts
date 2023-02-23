import {usersArray} from "./users";
import {usersInfoArray} from "./userInfo";
import {User} from "./users";

interface NewUser {
    name: string,
    position: string,
    age: number,
    gender: string
}

const getUsersJobPositions = (usersArray: User[]): NewUser[] => {
    const newUsersArray = usersArray.map(el => {
            return {
                name: el.name,
                gender: el.gender
            }
        }
    )

    const newUsersInfoArray: NewUser[] = usersInfoArray.map(el => {
            return {
                name: el.name,
                position: el.organization.position,
                age: el.age,
                gender: ''
            }
        }
    )


    for (let i = 0; i < newUsersInfoArray.length; i++) {
        let newUsersInfo = newUsersInfoArray[i]
        for (let j = 0; j < newUsersArray.length; j++) {
            newUsersInfo.gender = newUsersArray[i].gender
        }
    }
    return newUsersInfoArray
}

const usersPositions = getUsersJobPositions(usersArray);

console.log('userPositions', usersPositions)