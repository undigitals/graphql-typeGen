import React from 'react'
import { UniversityFragment } from './apollo/types'

type Props = {
    nameEng: UniversityFragment[]
}
function Feed({nameEng}: Props) {
    return (
        <div>
            <h1>Feed page</h1>
            {nameEng.map((f,i) => (
                <div key={i}>
                    <h1>{f.nameEng}</h1>
                </div>
            ))}
        </div>
    )
}

export default Feed