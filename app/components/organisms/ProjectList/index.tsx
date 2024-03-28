import React from "react";
import { ProductTypes } from "types/productTypes";
import ProjectCard from "app/components/molecules/ProjectCard";

export interface ProjectListProps {
  products: ProductTypes[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ products }) => {
  return (
    <div className={"flex w-full flex-row gap-6"}>
      {products.map((product, index) => (
        <ProjectCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProjectList;
