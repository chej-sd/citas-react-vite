import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente,eliminarPaciente }) => {



  return (
          <div  className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
          <h2 className="font-black text-xl text-center">ListadoPacientes</h2>
          <p className="font-bold mt-5 mb-10 text-center">
              Administra tus <span className="text-indigo-600">Pacientes y Citas</span>
          </p>

          {pacientes.map( paciente => (
            
              <Paciente 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
      {/* 
        <>
          
        </>
      ) : (
        <>
            <h2 className="font-black text-xl text-center">No hay pacientes</h2>
            <p className="font-bold mt-5 mb-10 text-center">
                Comienza a <span className="text-indigo-600">agregar pacientes</span>
            </p>
        </>
      )} */}

    

    </div>
    
  )
}

export default ListadoPacientes