import React from 'react'
import { Link } from 'react-router-dom'
import { MapPinIcon, BedDoubleIcon } from 'lucide-react'

function Home() {
  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Alojamientos en Corrientes, Argentina
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Descubre los mejores lugares para alojarte en la hermosa provincia de Corrientes. Desde apartamentos céntricos hasta cabañas junto al río.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <MapPinIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Ubicaciones Estratégicas</h3>
                  <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                    Alojamientos ubicados en los mejores puntos de la ciudad y la provincia.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <BedDoubleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Comodidad Garantizada</h3>
                  <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                    Espacios confortables y bien equipados para una estancia placentera.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Experiencia Auténtica</h3>
                  <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                    Vive la cultura correntina desde la comodidad de tu alojamiento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/alojamientos"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Explorar Alojamientos
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Home