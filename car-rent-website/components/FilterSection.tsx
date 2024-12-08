export default function FilterSection() {
  return (
    <div className="flex justify-around bg-white p-6 shadow-md rounded-md">
      <div>
        <label>Pick-Up</label>
        <input
          type="text"
          placeholder="Location"
          className="border rounded-md p-2"
        />
      </div>
      <div>
        <label>Date</label>
        <input type="date" className="border rounded-md p-2" />
      </div>
      <div>
        <label>Time</label>
        <input type="time" className="border rounded-md p-2" />
      </div>

      
      <button className="bg-blue-500 text-white gap-20 px-4 py-2 rounded-md ml-4">
        🔄
      </button>

      <div>
        <label>Drop-Off</label>
        <input
          type="text"
          placeholder="Location"
          className="border rounded-md p-2"
        />
      </div>
      <div>
        <label>Date</label>
        <input type="date" className="border rounded-md p-2" />
      </div>
      <div>
        <label>Time</label>
        <input type="time" className="border rounded-md p-2" />
      </div>
    </div>
  );
}
