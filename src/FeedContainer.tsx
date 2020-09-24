import React from 'react'
import { useUniverQuery, UniversityFragment } from './apollo/types'
import Feed from './Feed'

export default function FeedContainer() {
    const {loading, data,error} = useUniverQuery()
    console.log('data', data)
    console.log('error', error)
    console.log('loading', loading)
    
    if (!loading){
        return (
            <Feed nameEng={data?.universities as UniversityFragment[] || []}/>
        )
    }
    return null
}