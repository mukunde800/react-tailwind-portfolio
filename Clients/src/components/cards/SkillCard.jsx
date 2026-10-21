export default function SkillCard({ skill }) {
  return (
    <li>
      <div className="mb-1 flex justify-between text-sm font-medium">
        <span>{skill.name}</span>
        <span className="text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </li>
  );
}