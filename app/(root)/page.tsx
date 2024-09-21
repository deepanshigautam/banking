import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'

const loggedIn ={firstName:'Deepanshi'}

const Home = () => {
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
         <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName|| 'Guest'}
          subtext="Access and manage you account and transactions efficiently"
         
         />
        

        <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}

         />
         </header>
         RECENT TRANS


      </div>
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:123},{currentBalance:123}]}
      />
    </section>
  )
}

export default Home
