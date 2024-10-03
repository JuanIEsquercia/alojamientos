import React from 'react'
import { MapPinIcon, PhoneIcon, UsersIcon } from 'lucide-react'
import alojamientosData from '../data/alojamientos.json'

function Alojamientos() {
  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">ALOJAMIENTOS DISPONIBLES</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {alojamientosData.map((alojamiento, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-2">
                {alojamiento["NOMBRE ALOJAMIENTO"].toUpperCase()}
              </h3>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-300 space-y-2">
                <p className="flex items-center">
                  <PhoneIcon className="h-5 w-5 mr-2 text-indigo-500" />
                  {alojamiento["TELEFONO"].toString().toUpperCase()}
                </p>
                <p className="flex items-center">
                  <UsersIcon className="h-5 w-5 mr-2 text-indigo-500" />
                  CAPACIDAD MÁXIMA: {alojamiento["CAPACIDAD MAXIMA"].toString().toUpperCase()}
                </p>
                <p className="flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-2 text-indigo-500" />
                  {alojamiento["UBICACION"].toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Alojamientos