import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';

function Portfolio() {
  return (
    <>
      <div className="w-full text-center">
        <Title>My Projects</Title>
      </div>
      <main className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map(({ imgUrl, link, stack, title }) => (
            <PortfolioItem
              imgUrl={imgUrl}
              link={link}
              stack={stack}
              title={title}
              key={title}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Portfolio;
