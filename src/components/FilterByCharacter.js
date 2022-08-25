const FilterByCharacter = () => {
  return (  <label className="header__label" htmlFor="filterCharacter">
  Filtrar por personaje
</label>
<select
  className="header__text"
  name="filterCharacter"
  id="filterCharacter"
  value={inputFilterCharacter}
  onChange={handleFilterCharacter}
>
  <option value="all">--</option>
  <option value="Chandler">Chandler</option>
  <option value="Joey">Joey</option>
  <option value="Monica">Monica</option>
  <option value="Phoebe">Phoebe</option>
  <option value="Rachel">Rachel</option>
  <option value="Ross">Ross</option>
</select>);
};
export default FilterByCharacter;
