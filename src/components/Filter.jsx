import { Button, Input } from "@chakra-ui/react";

export default function Filter({
  searchValue,
  setSearchValue,
  setsearchParams,
}) {
  return (
    <div>
      <div className="filter-container">
        <label>
          <Input
            type="search"
            placeholder="Search for Events"
            mt="2rem"
            mb="2rem"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </label>
        <Button
          bg="pink.400"
          m=".2rem"
          color="white"
          onClick={() => setsearchParams({})}
        >
          All
        </Button>
        <Button
          bg="purple.500"
          color="white"
          m=".2rem"
          onClick={() => setsearchParams({ categoryIds: [1] })}
        >
          Sports
        </Button>
        <Button
          bg="orange.500"
          color="white"
          m=".2rem"
          onClick={() => setsearchParams({ categoryIds: [2] })}
        >
          Games
        </Button>
        <Button
          bg="purple.300"
          color="white"
          m=".2rem"
          onClick={() => setsearchParams({ categoryIds: [1, 2] })}
        >
          Sports and Games
        </Button>
      </div>
    </div>
  );
}
