import React from 'react';

function FormIndicatorCity() {
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };

    const [selectedOption, setSelectedOption] = React.useState("city_certificated");

    const handleButtonClick = () => {
        alert(selectedOption);
    }

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Cadastro de Cidade</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Análise de dados</li>
                    <li className="breadcrumb-item active" aria-current="page">Mapa</li>
                </ol>
            </nav>
            <form onSubmit={handleSubmit}
                  style={{
                      width: '70%',
                      margin: '0 auto',
                      display: 'flex',
                      flexDirection: 'column',
                  }}>
                <div>
                    <label style={{fontWeight: 'lighter', fontSize: '2.2rem', color: 'red'}}>Selecione opção que deseja
                        cadastrar:</label>
                    <select
                        className="form-control"
                        id="options"
                        name="options"
                        style={{fontSize: '1rem', marginLeft: '0.5rem', marginBottom: '0.5rem', padding: '0.2rem'}}
                        onChange={handleOptionChange}
                        value={selectedOption}
                    >
                        <option value="city_certificated">Cidade certificada</option>
                        <option value="create_city">Cadastrar cidade</option>
                    </select>
                </div>
                <label style={{fontSize: '1.2rem', fontWeight: 'inherit', marginBottom: '0.5rem'}}>Nome da
                    cidade</label>
                <input name="name" style={{
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                }} required/>

                <label style={{fontSize: '1.2rem', fontWeight: 'inherit', marginBottom: '0.5rem'}}>Consumo total de
                    energia
                    residencial durante um ano (kWh)</label>
                <input name="consume_energy_residential_year" type={"number"} style={{
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                }} required/>


                <label style={{fontSize: '1.2rem', fontWeight: 'inherit', marginBottom: '0.5rem'}}>População
                    total</label>
                <input name="total_population_city" type={"number"} style={{
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                }} required/>


                <label style={{fontSize: '1.2rem', fontWeight: 'inherit', marginBottom: '0.5rem'}}>Número de
                    habitantes
                    da cidade que têm fornecimento regular de energia eletrica</label>
                <input name="total_inhabitant_city_regular_energy" type={"number"} style={{
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                }} required/>

                <label style={{fontSize: '1.2rem', fontWeight: 'inherit', marginBottom: '0.5rem'}}>Consumo total de
                    energia eletrica em edificios publicos em estagio final de consumo</label>
                <input name="percent_energy_renewable" type={"number"} style={{
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                }} required/>

                <label style={{fontSize: '1.2rem', fontWeight: 'inherit', marginBottom: '0.5rem'}}>Área total dos
                    edifícios públicos (m2)</label>
                <input name="total_area_edifier_public" type={"number"} style={{
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                }} required/>

                <label style={{fontSize: '1.2rem', fontWeight: 'inherit', marginBottom: '0.5rem'}}>Consumo total de
                    energia dos edíficios públicos(kWh)</label>
                <input name="total_consume_energy_edifier_public" type={"number"} style={{
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                }} required/>

                <label style={{fontSize: '1.2rem', fontWeight: 'inherit', marginBottom: '0.5rem'}}>Quantidade de
                    energia
                    eletrica consumida na cidade proveniente de fontes renovaveis (kWh)</label>
                <input name="total_energy_consume_photovoltaic" type={"number"} style={{
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                }} required/>

                <label style={{fontSize: '1.2rem', fontWeight: 'inherit', marginBottom: '0.5rem'}}>Consumo total de
                    energia(kWh)</label>
                <input name="total_consume_energy" type={"number"} style={{
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                }} required/>

                <label style={{fontSize: '1.2rem', fontWeight: 'inherit', marginBottom: '0.5rem'}}>Numero total de
                    interrupcoes ao consumidor</label>
                <input name="total_interruptions_consumer" type={"number"} style={{
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                }} required/>

                <label style={{fontSize: '1.2rem', fontWeight: 'inherit', marginBottom: '0.5rem'}}>Numero total de
                    consumidores atendidos</label>
                <input name="total_consumer_attended" type={"number"} style={{
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                }} required/>

                <label style={{fontSize: '1.2rem', fontWeight: 'inherit', marginBottom: '0.5rem'}}>Tempo total de
                    interrupcao de energia eletrica no periodo considerado (Horas)</label>
                <input name="total_time_interruptions_energy" type={"number"} style={{
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                }} required/>

                <button type="submit" onClick={handleButtonClick} style={{
                    backgroundColor: '#2196f3',
                    color: 'white',
                    padding: '1rem',
                    fontSize: '1rem',
                    borderRadius: '4px',
                    border: 'none',
                    marginBottom: '2rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    alignSelf: 'center',
                    width: '200px',
                }}>Cadastrar
                </button>
            </form>
        </div>
    );
}

export default FormIndicatorCity;
