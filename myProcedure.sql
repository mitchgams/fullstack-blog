delimiter //
create procedure spBlogTags
(in blogid int)
begin
select * from blogtags b join tags t on t.id = b.tagid 
where b.blogid = blogid;
end //
delimiter ;