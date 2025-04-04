export default function Kapcs(){
    return(
        <><div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Kapcsolatok és fontos elérhetőségek Rondában</h2>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Turisztikai információ</h3>
        <p className="text-gray-700 mb-4">
          Ha turistaként érkezel Rondába, érdemes felkeresni a helyi <strong>Turisztikai Információs Központot</strong>,
          ahol térképeket, programajánlatokat és egyéb hasznos tudnivalókat kaphatsz.
        </p>
        <p className="text-gray-700 mb-4">
          📍 <strong>Cím:</strong> Plaza de España, Ronda, Spanyolország<br />
          📞 <strong>Telefon:</strong> +34 952 87 87 88<br />
          🌐 <strong>Weboldal:</strong> <a href="https://www.turismoderonda.es" className="text-blue-600 hover:underline">turismoderonda.es</a>
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Vészhelyzetek és fontos telefonszámok</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>🚑 <strong>Sürgősségi segélyhívó:</strong> 112 (rendőrség, tűzoltóság, mentők)</li>
          <li>🚓 <strong>Helyi rendőrség:</strong> +34 952 87 60 42</li>
          <li>🏥 <strong>Kórház és egészségügyi központ:</strong> +34 952 87 86 00</li>
          <li>🚖 <strong>Taxi szolgáltatás:</strong> +34 952 87 81 11</li>
        </ul>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Idegenvezetők és túraszervezők</h3>
        <p className="text-gray-700 mb-4">
          Ha szeretnéd igazán megismerni Rondát, érdemes egy helyi idegenvezetőt felkeresni.
          Több túraszervező is működik a városban, akik vezetett sétákat, borkóstolókat és természetjáró túrákat kínálnak.
        </p>
        <p className="text-gray-700 mb-4">
          📞 <strong>Ronda Tour Guide:</strong> +34 654 32 21 45<br />
          📞 <strong>Andalucia Adventures:</strong> +34 678 90 12 34
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Helyi nagykövetségek és konzulátusok</h3>
        <p className="text-gray-700 mb-4">
          Ha külföldiként utazol Rondába, érdemes tudnod, hogy a legközelebbi nagykövetségek Malagában vagy Sevillában találhatók.
          Probléma esetén először a saját országod madridi nagykövetségéhez fordulhatsz.
        </p>
      </div></>
            )
}