import { useState } from 'react';
import { Button, Container, GridRow, Heading, Input } from '../../../../';
import { FormField } from '../../../organisms/form-field/FormField';
import { GridCol } from '../../grid/GridCol';
import './search.scss';

export function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container classNames={['p-5']}>
      <GridRow variant="mobile-full" classNames={['SearchForm']}>
        <GridCol>
          <GridRow classNames={['m-0']}>
            <Heading as="T26" text="Search" classNames={['SearchForm--title']} />
          </GridRow>
          <GridRow classNames={['m-0']}>
            <FormField id="search-field" classNames={['SearchForm--search-field']}>
              <Input
                name="search-field"
                placeholder="Search"
                onChange={(e) => {
                  setSearchQuery(e.currentTarget.value);
                }}
                value={searchQuery}
                keyType="search"
                aria-label="search_input"
              />
            </FormField>
          </GridRow>
          <GridRow classNames={['m-0']}>
            <Button
              label="Search"
              variant="primary"
              type="submit"
              iconLeft="action_search"
              disabled={searchQuery.length == 0}
              classNames={['SearchForm--search-button']}
            />
          </GridRow>
        </GridCol>
      </GridRow>
    </Container>
  );
}
