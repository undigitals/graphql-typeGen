import React from 'react'
import { useUniverNofrQuery } from './apollo/types'
import Feed from './Feed'

export default function FeedContainer() {
    const {loading, data,error} = useUniverNofrQuery()
    console.log('data', data)
    console.log('error', error)
    console.log('loading', loading)
    
    if (!loading){
        return (
            <Feed nameEng={data?.universities}/>
        )
    }
    
}
