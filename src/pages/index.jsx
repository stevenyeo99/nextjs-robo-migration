import { useState } from "react";

import SearchBox from "@/components/SearchBox";
import Scroll from "@/components/Scroll";
import ErrorBoundry from "@/components/ErrorBoundry";
import CardList from "@/components/CardList";

import 'tachyons';
import './index.css'

export default function Index(props) {

  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = props.robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
      
        !props.robots.length ?
        <h1>Loading</h1> :
        (
          <div className='tc'>
              <h1 className='f2'>RoboFriends</h1>
              <SearchBox searchField={searchField} searchChange={onSearchChange}/>
              <Scroll>
                  <ErrorBoundry>
                      <CardList robots={filteredRobots} />
                  </ErrorBoundry>
              </Scroll>
          </div>
        )
      
  )
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      robots: data
    }
  };
};