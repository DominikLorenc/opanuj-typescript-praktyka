import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Planet, SWAPIResponse } from '../types';

interface PlanetsGridProps<As extends React.ElementType = 'div'> {
  columns: number;
  children: (planet: Planet) => React.ReactElement;
  as?: As;
}

type Props<As extends React.ElementType> = PlanetsGridProps<As> &
  Omit<React.ComponentProps<As>, keyof PlanetsGridProps<As>>;

export function PlanetsGrid<As extends React.ElementType = 'div'>({
  columns,
  children,
  as,
  ...rest
}: Props<As>) {
  const [planets, setPlanets] = useState<Planet[]>([]);

  const Component = as || 'div';

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const { data } = await axios.get<SWAPIResponse>('https://swapi.dev/api/planets/');
        setPlanets(data.results);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <Component {...rest} className=" bg-gray-900" data-testid="planets-grid">
      <div className={`grid gap-6 grid-cols-1 md:grid-cols-${columns} auto-rows-fr`}>
        {planets.map((planet) => (
          <div key={planet.url} className="h-full">
            {children(planet)}
          </div>
        ))}
      </div>
    </Component>
  );
}
