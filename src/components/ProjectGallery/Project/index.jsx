import styles from "./style.module.css";
export default function Project({ index, project, setModal }) {
  return (
    <>
      <a
        href={project.link}
        className={`${styles.project} flex items-center justify-between border-t border-solid border-black last:border-b p-4 md:p-7`}
        onMouseEnter={() => {
          setModal({ active: true, index: index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index: index });
        }}
      >
        <div className={`${styles.title} text-2xl md:text-3xl`}>
          {project.name}
        </div>
        <div className={`${styles.rest} text-right`}>
          <div>{project.type}</div>
          <div className="text-sm">{project.tech}</div>
        </div>
      </a>
    </>
  );
}
