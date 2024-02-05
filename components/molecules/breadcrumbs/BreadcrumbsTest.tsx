/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */

import { FC, useState } from 'react';

import { Breadcrumbs, Crumb } from './Breadcrumbs';

// eslint-disable-next-line
const db: any = {
  'Arnold Blinn': 'Arnold Blinn',
  'Danny Burrows': 'Arnold Blinn',
  'Ryp Walters': 'Arnold Blinn',
  'Pat Patterson': 'Arnold Blinn',
  'Benjamin Stotts': 'Arnold Blinn',
  'Gerald Hinson': 'Arnold Blinn',
  'Ross Brockhoff': 'Benjamin Stotts',
  'Jenn Stueckler': 'Benjamin Stotts',
  'Bryan Taylor': 'Benjamin Stotts',
  'Hawk Flores': 'Benjamin Stotts',
  'Rebecca Armenta': 'Benjamin Stotts',
  'Randall Potter': 'Brenden Goetz',
  'Joseph Bond': 'Bryan Taylor',
  'Tanner Boswell': 'Bryan Taylor',
  'Michael Flanagan': 'Chris Porter',
  'Kyle Shannon': 'Dan Calaway',
  'Douglas Lee': 'Danny Burrows',
  'Mike Poe': 'Danny Burrows',
  'Mary Joseph': 'Danny Burrows',
  'Chris Porter': 'Danny Burrows',
  'Melinda Harbaugh': 'Danny Burrows',
  'Neal Dettling': 'Danny Burrows',
  'Jeanne Herndon': 'Danny Burrows',
  'Brenden Goetz': 'Danny Burrows',
  'Gabriel Hobeika': 'Danny Burrows',
  'Archana Chinnaswamy': 'Danny Burrows',
  'Sabrina Leggett': 'Douglas Lee',
  'Connor Chappell': 'Douglas Lee',
  'Steven Garberg': 'Douglas Lee',
  'John Howard': 'Dudley Flanders',
  'Dan Calaway': 'Dudley Flanders',
  'John Howlett': 'Dudley Flanders',
  'Mercedes Gregory': 'Dudley Flanders',
  'Ivan Olson': 'Dudley Flanders',
  'Richard Fears': 'Dudley Flanders',
  'Robert Vazquez': 'Gerald Hinson',
  'Andrew Boen': 'Gerald Hinson',
  'Nick Robinson': 'Gerald Hinson',
  'Kayden Hardcastle': 'Gerald Hinson',
  'Blake Wilson': 'Gerald Hinson',
  'Chris Gibson': 'Gerald Hinson',
  'Victoria McAtee': 'Gerald Hinson',
  'Matthew Young': 'Gerald Hinson',
  'Nancy Tinder': 'Jason Barr',
  'Frank Forneris': 'Jason Barr',
  'Kevin Myers': 'Jason Barr',
  'Douglas Orey': 'Jason Barr',
  'David Witherington': 'Jason Barr',
  'Charity Trussell': 'Jason Barr',
  'Randy Mackey Jr': 'Jason Barr',
  'Charlene Clark': 'Jason Barr',
  'Vidula Srri Muruganandam': 'Jenn Stueckler',
  'Kyle Christopher': 'Jenn Stueckler',
  'Annette Pierce': 'Jenn Stueckler',
  'Becca Curlee': 'Jenn Stueckler',
  'Patty Howry': 'Jeremiah Brooks',
  'Dwayne Royston': 'Jeremiah Brooks',
  'Sheron Noe': 'Jeremiah Brooks',
  'James Adam': 'Jeremiah Brooks',
  'Eugene Brown': 'Jeremiah Brooks',
  'Chelsea Thomas': 'Jeremiah Brooks',
  'Shane Sutton': 'Jeremiah Brooks',
  'Tommy Towler': 'Jeremy Russell',
  'Patrick Klingensmith': 'Jeremy Russell',
  'William Watson': 'Jeremy Russell',
  'Christopher Pierce': 'Jeremy Russell',
  'Jeni Brandt': 'Joe Bailey',
  'Carol Causey': 'Joe Bailey',
  'Rick Kendrick': 'Joe Bailey',
  'Frank Renbarger': 'Joe Bailey',
  'Michael Nemeth': 'Kevin Sissons',
  'Jim McGill': 'Mary Joseph',
  'Kevin Legg': 'Mary Joseph',
  'Alyssa Broussard': 'Michael Whitman',
  'Anthony Cottom': 'Michael Whitman',
  'Peyton Keith': 'Michael Whitman',
  'Joseph Garretson': 'Michael Whitman',
  'Leah Braly': 'Mike Files',
  'Lance Huntsman': 'Mike Files',
  'Sarah Bragg': 'Mike Files',
  'Alexandre Costantini': 'Nick Robinson',
  'Henry Chan': 'Nick Robinson',
  'Eldon Chan': 'Nick Robinson',
  'Sheila Jones': 'Pat Patterson',
  'Jeremiah Brooks': 'Pat Patterson',
  'Margie Shaw': 'Pat Patterson',
  'DeAnna Law': 'Pat Patterson',
  'Misty Mathews': 'Pat Patterson',
  'Jason Barr': 'Pat Patterson',
  'Dudley Flanders': 'Pat Patterson',
  'Robert Lacy': 'Pat Patterson',
  'Gayla Thornton': 'Patty Howry',
  'Jerry Porter': 'Patty Howry',
  'Christopher Mathews': 'Patty Howry',
  'Trintin Flowers': 'Patty Howry',
  'Brett Huntsman': 'Patty Howry',
  'Jeff Campbell': 'Patty Howry',
  'Grady Alexander': 'Patty Howry',
  'Tyler Gifford': 'Patty Howry',
  'Richard Jones': 'Patty Howry',
  'Mike Files': 'Robert Lacy',
  'Jeremy Russell': 'Robert Lacy',
  'Ali Sylvester': 'Ross Brockhoff',
  'Kylie Humpert': 'Ross Brockhoff',
  'Gary Schomberger': 'Ryp Walters',
  'Jennifer Lao': 'Ryp Walters',
  'Michael Whitman': 'Ryp Walters',
  'David Walz': 'Ryp Walters',
  'David Zimmerman': 'Ryp Walters',
  'Sue Adasiewicz': 'Ryp Walters',
  'Luke Menard': 'Ryp Walters',
  'Joe Bailey': 'Sheila Jones',
  'Kevin Sissons': 'Sheila Jones',
  'Sharon Owens': 'Sue Adasiewicz',
  'Joe Wagner': 'Sue Adasiewicz',
  'Ruchi Garg': 'Sue Adasiewicz',
  'Jonathan Wong': 'Sue Adasiewicz',
  'Marisol Darnell': 'Sue Adasiewicz',
  'David Kellogg': 'Victoria McAtee',
  'Justin Paulson': 'Victoria McAtee',
};

function get_descendants(employee: string): string[] {
  const descendants = [];

  for (const [key, value] of Object.entries(db)) {
    if (value === employee && key != value) {
      descendants.push(key);
    }
  }

  return descendants;
}

function get_ancestors(employee: string): Crumb[] {
  const ancestors: Crumb[] = [];

  ancestors.unshift({ label: employee, link: employee });

  let current = employee;

  let manager: string = db[current];

  while (manager != current) {
    ancestors.unshift({ label: manager, link: manager });
    current = manager;
    manager = db[manager];
  }

  return ancestors;
}

export const BreadcrumbsTest: FC = ({}) => {
  const [activeNode, setActiveNode] = useState('Arnold Blinn');

  const ancestors = get_ancestors(activeNode);
  const descendants = get_descendants(activeNode);
  return (
    <div>
      <Breadcrumbs crumbs={ancestors} maxTail={3} onClick={setActiveNode} />
      {descendants.map(function (name, index) {
        const nodeClicked = (e: React.MouseEvent<HTMLAnchorElement>): void => {
          e.preventDefault();
          setActiveNode(name);
        };
        return (
          <div key={index}>
            <a href="#" onClick={nodeClicked}>
              {name}
            </a>
            <br />
          </div>
        );
      })}
    </div>
  );
};
